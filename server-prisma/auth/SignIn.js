const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();

// Secret key for JWT
const JWT_SECRET = 'azerty';

// Register a new user 
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1h', 
    });

    res.status(201).json({ token });  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Login 
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1h', 
    });

    res.json({ token });  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Middleware to authenticate requests
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });
    req.user = user;
    next();
  });
}

// get profile user
router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const userProfile = await prisma.user.findUnique({
      where: {
        id: req.user.userId,
      },
    });

    res.json(userProfile);  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;