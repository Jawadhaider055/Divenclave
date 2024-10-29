import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { reviewer_name, reviewer_title, review_content, review_rating } = req.body;

    if (!reviewer_name || !reviewer_title || !review_content || !review_rating) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
      const updatedReview = await prisma.review.update({
        where: { id: parseInt(id) },
        data: {
          reviewer_name,
          reviewer_title,
          review_content,
          review_rating: parseInt(review_rating, 10),
        },
      });
      res.status(200).json(updatedReview);
    } catch (error) {
      res.status(500).json({ error: 'Error updating review' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedReview = await prisma.review.delete({
        where: { id: parseInt(id) },
      });
      res.status(200).json(deletedReview);
    } catch (error) {
      res.status(500).json({ error: 'Error deleting review' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
