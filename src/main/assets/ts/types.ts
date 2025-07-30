export type BlogPost = {
  id: string;
  seo: {
    title: string;
    metaDescription: string;
    metaTags: {
      title: string;
      description: string;
      keywords: string;
      author: string;
    };
  };
  images: {
    url: string;
    alt: string;
  }[];
  content: {
    title: string;
    introduction: string;
    importance?: {
      title: string;
      points: string[];
      note: string;
    };
    benefits?: {
      title: string;
      description: string;
    }[];
    timing?: {
      question: string;
      answer: string;
    };
    stages?: {
      title: string;
      description: string;
    }[];
    reasonsToAct?: {
      title: string;
      points: string[];
    };
    lateActionAdvice?: {
      question: string;
      answer: string;
    };
    servicesOffered?: {
      title: string;
      points: string[];
    };
    conclusion: string;
  };
};