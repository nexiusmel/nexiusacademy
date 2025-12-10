import React from 'react';

export interface Course {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  students: number;
  image: string;
  author: string;
  authorImage: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Category {
  id: number;
  name: string;
  count: number;
  icon: React.ReactNode;
  color?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  comments: number;
  image: string;
  excerpt: string;
}