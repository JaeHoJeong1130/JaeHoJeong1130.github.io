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
    name: "Project One",
    tagline: "복잡한 업무 흐름을 한 화면에서 다루는 운영 도구",
    summary:
      "private README를 바탕으로 문제 정의, 핵심 기능, 기술 선택, 결과를 공개 가능한 문장으로 정리할 자리입니다.",
    stack: ["React", "TypeScript", "API Design"],
    role: "Frontend / Product",
    period: "2026",
    status: "Private",
    impact: "Workflow clarity",
  },
  {
    name: "Project Two",
    tagline: "데이터를 빠르게 비교하고 판단하는 분석 인터페이스",
    summary:
      "README 원문 대신 요약된 성과와 설계 의도를 노출합니다. 내부 링크와 민감한 도메인은 포함하지 않습니다.",
    stack: ["Python", "FastAPI", "Charts"],
    role: "Full-stack",
    period: "2025",
    status: "Private",
    impact: "Faster decisions",
  },
  {
    name: "Project Three",
    tagline: "사용자 입력을 구조화해 반복 작업을 줄이는 자동화",
    summary:
      "어떤 반복 문제를 해결했는지, 어떤 자동화 경계를 정했는지, 결과적으로 무엇이 나아졌는지 중심으로 보여줍니다.",
    stack: ["Node.js", "Automation", "GitHub Actions"],
    role: "Automation",
    period: "2025",
    status: "Private",
    impact: "Reduced manual work",
  },
  {
    name: "Project Four",
    tagline: "작고 빠른 실험을 제품 형태로 검증한 프로토타입",
    summary:
      "짧은 실험의 배경, 빠르게 검증한 가설, 다음 단계로 이어진 배움을 간결한 포트폴리오 카드로 압축합니다.",
    stack: ["Vite", "React", "UX Prototype"],
    role: "Prototype Lead",
    period: "2024",
    status: "Private",
    impact: "Validated direction",
  },
  {
    name: "Project Five",
    tagline: "문서와 실행 흐름을 연결한 개발자 경험 개선",
    summary:
      "README의 설치, 실행, 배포 흐름을 정리해 프로젝트가 어떻게 유지보수되도록 설계됐는지 보여줍니다.",
    stack: ["Docs", "CI", "Developer Tools"],
    role: "DX / Tooling",
    period: "2024",
    status: "Private",
    impact: "Cleaner onboarding",
  },
  {
    name: "Project Six",
    tagline: "작은 팀이 반복해서 쓰는 내부 시스템",
    summary:
      "구현 세부보다 사용자, 문제, 역할, 결과를 중심에 둔 공개용 요약으로 프로젝트의 가치를 전달합니다.",
    stack: ["TypeScript", "Design System", "Testing"],
    role: "Product Engineer",
    period: "2024",
    status: "Private",
    impact: "Reusable foundation",
  },
];

export const skills = [
  {
    title: "Product Engineering",
    description: "문제 정의에서 구현, 검증까지 이어지는 제품 중심 개발",
    items: ["React", "TypeScript", "State Modeling", "UX Systems"],
  },
  {
    title: "Backend & Automation",
    description: "작업을 안정적으로 반복할 수 있게 만드는 API와 자동화",
    items: ["Node.js", "Python", "FastAPI", "GitHub Actions"],
  },
  {
    title: "Communication",
    description: "private 작업을 공개 가능한 맥락과 결과 중심의 언어로 정리",
    items: ["README Curation", "Technical Writing", "Portfolio Story"],
  },
];
