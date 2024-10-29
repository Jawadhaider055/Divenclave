import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const reviews = await prisma.review.findMany();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching reviews' });
    }
  } else if (req.method === 'POST') {
    const { reviewer_name, reviewer_title, review_content, review_rating } = req.body;

    if (!reviewer_name || !reviewer_title || !review_content || !review_rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const newReview = await prisma.review.create({
        data: {
          reviewer_name,
          reviewer_title,
          review_content,
          review_rating: parseInt(review_rating, 10),
        },
      });
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ error: 'Error creating review' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
