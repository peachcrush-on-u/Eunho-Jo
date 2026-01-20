
export interface Publication {
  id: string;
  titleEn: string;
  titleKr: string;
  journal: string;
  year: string;
  descriptionEn: string;
  descriptionKr: string;
  link?: string;
}

export interface Conference {
  id: string;
  nameEn: string;
  nameKr: string;
  location: string;
  date: string;
  descriptionEn: string;
  descriptionKr: string;
}

export interface Project {
  id: string;
  titleEn: string;
  titleKr: string;
  roleEn: string;
  roleKr: string;
  duration: string;
  descriptionEn: string;
  descriptionKr: string;
}

export interface GalleryItem {
  id: string;
  url: string;
}

export interface PortfolioData {
  profile: {
    nameEn: string;
    nameKr: string;
    taglineEn: string;
    taglineKr: string;
    bioEn: string;
    bioKr: string;
    email: string;
    scholarLink: string;
    linkedinLink: string;
    imageUrl: string;
    researchKeywords: string[];
  };
  publications: Publication[];
  conferences: Conference[];
  projects: Project[];
  gallery: GalleryItem[];
}

export const INITIAL_DATA: PortfolioData = {
  profile: {
    nameEn: "Eunho Jo",
    nameKr: "조은호",
    taglineEn: "Graduate Student & Researcher",
    taglineKr: "대학원생 및 연구원",
    bioEn: "I am a dedicated graduate student focusing on Human-Computer Interaction and AI. I strive to bridge the gap between theory and practical application through innovative research.",
    bioKr: "인간-컴퓨터 상호작용(HCI)과 인공지능을 연구하고 있는 대학원생 조은호입니다. 혁신적인 연구를 통해 이론과 실제의 간극을 좁히기 위해 노력하고 있습니다.",
    email: "eunho.jo@yonsei.ac.kr",
    scholarLink: "https://scholar.google.com",
    linkedinLink: "https://linkedin.com",
    imageUrl: "https://picsum.photos/400/500?grayscale",
    researchKeywords: ["#HCI", "#Artificial_Intelligence", "#User_Experience", "#Data_Science"]
  },
  publications: [
    {
      id: "p1",
      titleEn: "Analysis of Advanced Algorithms in Modern Computing",
      titleKr: "현대 컴퓨팅에서 고급 알고리즘의 분석",
      journal: "IEEE Transactions",
      year: "2024",
      descriptionEn: "Exploring sorting algorithm efficiency in high-concurrency environments.",
      descriptionKr: "고동시성 환경에서의 정렬 알고리즘 효율성 탐구."
    }
  ],
  conferences: [
    {
      id: "c1",
      nameEn: "International Conference on Machine Learning (ICML)",
      nameKr: "국제 기계 학습 학술대회 (ICML)",
      location: "Lisbon, Portugal",
      date: "2024.07",
      descriptionEn: "Poster presentation on neural network optimization.",
      descriptionKr: "신경망 최적화 기법에 관한 포스터 발표."
    }
  ],
  projects: [
    {
      id: "proj1",
      titleEn: "Smart Campus Energy Management",
      titleKr: "스마트 캠퍼스 에너지 관리",
      roleEn: "Lead Researcher",
      roleKr: "주연구원",
      duration: "2023.01 - 2023.12",
      descriptionEn: "Predictive modeling for HVAC optimization.",
      descriptionKr: "공조 시스템 최적화를 위한 예측 모델링 수행."
    }
  ],
  gallery: Array.from({ length: 9 }).map((_, i) => ({
    id: `g${i}`,
    url: `https://picsum.photos/800/800?seed=${i + 20}`
  }))
};
