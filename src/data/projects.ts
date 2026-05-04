export type Project = {
  name: string;
  tagline: string;
  summary: string;
  stack: string[];
  role: string;
  period: string;
  status: string;
  impact: string;
};

export const projects: Project[] = [
  {
    name: "반도체 솔루션 AI 통합 플랫폼",
    tagline: "실제 현장에 배포되는 통합 지능형 SW 시스템",
    summary:
      "반도체 솔루션 회사에서 Vision 모델(YOLO 등)과 LLM을 활용한 AI 기능을 연구하고, 프론트엔드와 백엔드를 아우르는 소프트웨어로 서비스화하는 업무를 주도하고 있습니다.",
    stack: ["Python", "React", "Docker", "NGINX", "C++", "C#"],
    role: "AI & SW Engineer",
    period: "현재",
    status: "Production",
    impact: "AI 모델의 실무 서비스화",
  },
  {
    name: "데이콘 Basic 스트레스 지수 예측",
    tagline: "머신러닝 기반 생체 데이터 예측 모델",
    summary:
      "팀원들과 역할을 분담하여 Keras와 Scikit-Learn을 활용해 데이터 전처리, 모델 설계, 하이퍼파라미터 튜닝을 주도적으로 수행했습니다.",
    stack: ["Python", "Keras", "Scikit-Learn"],
    role: "ML Engineer",
    period: "Competition",
    status: "3등 / 621팀",
    impact: "예측 정확도 상위권 달성",
  },
  {
    name: "2025 전력사용량 예측 AI 경진대회",
    tagline: "시계열 데이터를 활용한 전력 수요 예측",
    summary:
      "과거 전력 사용량 및 기상 데이터를 기반으로 미래 전력 수요를 예측하는 AI 모델을 개발하여 안정적이고 최적화된 성능을 입증했습니다.",
    stack: ["PyTorch", "Transformer", "Time Series"],
    role: "AI Engineer",
    period: "2025",
    status: "6등 / 1566팀",
    impact: "최상위권 입상",
  },
  {
    name: "스마트 항만 AGV 경로 최적화 경진대회",
    tagline: "무인운반차 라우팅 알고리즘 설계",
    summary:
      "항만 내 무인운반차(AGV)의 충돌을 방지하고 최단 시간 내 목적지에 도달하기 위한 최적화 알고리즘을 설계하고 평가했습니다.",
    stack: ["Python", "Optimization", "Algorithm"],
    role: "AI Engineer",
    period: "Competition",
    status: "5등 / 417팀",
    impact: "물류 지연시간 최소화",
  }
];

export const skills = [
  {
    title: "AI & Machine Learning",
    description: "Vision Transformer, YOLO, BERT 등 비전 및 자연어 처리 모델 구현과 데이터 전처리, 하이퍼파라미터 튜닝",
    items: ["PyTorch", "Keras", "Transformer", "YOLO", "BERT/GPT", "Scikit-Learn"],
  },
  {
    title: "Software Development",
    description: "C#, C++ 기반 애플리케이션부터 TypeScript, React 등 현대적 웹 스택을 활용한 엔드투엔드 개발",
    items: ["Python", "C#", "C++", "TypeScript", "React"],
  },
  {
    title: "DevOps & Infrastructure",
    description: "개발된 시스템을 실제 환경에 안정적으로 배포하고 운영하기 위한 인프라 구성",
    items: ["AWS", "Docker", "NGINX"],
  },
];
