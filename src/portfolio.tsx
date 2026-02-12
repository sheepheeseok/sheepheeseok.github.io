import "./index.css";

export default function Portfolio() {

    const scrollToProject = (key: string) => {
        const el = document.getElementById(`project-${key}`);
        if (!el) return;

        el.scrollIntoView({ behavior: "smooth", block: "center" });

        el.classList.add("highlight");
        setTimeout(() => {
            el.classList.remove("highlight");
        }, 1600);
    };

    return (
        <div className="portfolio-container">

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-icon-wrapper">
                    <svg className="spark-icon" viewBox="0 0 64 64" fill="none">
                        <path d="M32 4C28 14 14 20 14 34C14 47 24 56 32 56C40 56 50 47 50 34C50 20 36 14 32 4Z"
                              fill="#1A1A1A"/>
                    </svg>
                </div>

                <h1 className="hero-title">
                    작은 불씨를 가치로 바꾸는<br/>
                    개발자, 양희석입니다.
                </h1>

                <p className="hero-subtitle">
                    Full-Stack Developer · Product Design Oriented
                </p>

                <div className="scroll-hint">
                    <span>SCROLL</span>
                    <div className="scroll-line"></div>
                </div>

            </section>

            {/* Intro Profile Section */}
            <section className="intro-section">
                <div className="intro-wrapper">

                    {/* Left – Profile */}
                    <div className="intro-profile">
                        <div className="profile-image-wrapper">
                            <img src="/profile.jpg" alt="양희석 프로필"/>
                        </div>
                    </div>

                    {/* Right – Info */}
                    <div className="intro-info">

                        <div className="intro-block">
                            <h3 className="intro-title">ABOUT ME</h3>
                            <ul className="intro-list">
                                <li>양희석</li>
                                <li>2002.04.12</li>
                                <li>010-9972-4782</li>
                                <li>sheeph001@gmail.com</li>
                            </ul>
                        </div>

                        <div className="intro-block">
                            <h3 className="intro-title">EDUCATION</h3>
                            <ul className="intro-list">
                                <li>2026년 2월 / 신구대학교 컴퓨터소프트웨어과 졸업</li>
                            </ul>
                        </div>

                        <div className="intro-block">
                            <h3 className="intro-title">LICENSE</h3>
                            <ul className="intro-list">
                                <li>e-Test Professionals Matser</li>
                                <li>AWS Certified AI Practitioner</li>
                            </ul>
                        </div>

                        <div className="intro-block">
                            <h3 className="intro-title">PROJECT FOCUS</h3>
                            <ul className="intro-tags">
                                <li>SNS Service</li>
                                <li>Web Platform</li>
                                <li>Mobile App Service</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>


            <section className="skills-section">
                <h2 className="section-title">핵심 기술</h2>

                <div className="orbit-container">
                    <div className="orbit-center">개발</div>

                    {/* Orbit 1 */}
                    <div className="orbit orbit-1">
                        <div className="orbit-rotate-wrapper">
                            <div className="orbit-dot"></div>
                        </div>
                    </div>

                    {/* Orbit 2 */}
                    <div className="orbit orbit-2">
                        <div className="orbit-rotate-wrapper">
                            <div className="orbit-dot"></div>
                        </div>
                    </div>

                    {/* Orbit 3 */}
                    <div className="orbit orbit-3">
                        <div className="orbit-rotate-wrapper">
                            <div className="orbit-dot"></div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="skill skill-1">
                        <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2l9 5v10l-9 5-9-5V7z" stroke="#111" strokeWidth="1.5"/>
                            <path d="M9 12l3 3 5-5" stroke="#111" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        Spring Boot
                    </div>

                    <div className="skill skill-2">
                        <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="2" fill="#111"/>
                            <ellipse cx="12" cy="12" rx="9" ry="4" stroke="#111" strokeWidth="1.3"/>
                            <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#111" strokeWidth="1.3"
                                     transform="rotate(60 12 12)"/>
                            <ellipse cx="12" cy="12" rx="4" ry="9" stroke="#111" strokeWidth="1.3"
                                     transform="rotate(120 12 12)"/>
                        </svg>
                        React
                    </div>

                    <div className="skill skill-3">
                        <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M6 15a4 4 0 010-8 5 5 0 019.7-1.2A4 4 0 1118 15H6z" stroke="#111"
                                  strokeWidth="1.5"/>
                        </svg>
                        AWS
                    </div>

                    <div className="skill skill-4">
                        <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                            <path d="M6 14l8-8h4l-8 8 8 8h-4l-8-8z" stroke="#111" strokeWidth="1.5"/>
                        </svg>
                        Flutter
                    </div>

                    <div className="skill skill-5">
                        <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                            <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#111" strokeWidth="1.5"/>
                            <path d="M4 6v10c0 1.7 3.6 3 8 3s8-1.3 8-3V6" stroke="#111" strokeWidth="1.5"/>
                        </svg>
                        MySql
                    </div>

                    <div className="skill skill-6">
                        <svg className="skill-icon" viewBox="0 0 24 24" fill="none">
                            <rect x="5" y="11" width="3" height="3" stroke="#111" strokeWidth="1.5"/>
                            <rect x="9" y="11" width="3" height="3" stroke="#111" strokeWidth="1.5"/>
                            <rect x="13" y="11" width="3" height="3" stroke="#111" strokeWidth="1.5"/>
                            <path d="M4 13c0 4 3 7 8 7 4 0 7-2 8-5h-4c-1 0-2-1-2-2H4z" stroke="#111" strokeWidth="1.5"/>
                        </svg>
                        Docker
                    </div>
                </div>
            </section>

            <h2 className="section2-title">대표 프로젝트</h2>

            {/* JobRecord Overview Section */}
            <section className="jobrecord-overview-section">
                <div className="jobrecord-overview-container">

                    {/* Left Content */}
                    <div className="jobrecord-overview-left">
                        <h2 className="jobrecord-title">JOB RECORD</h2>
                        <h3 className="jobrecord-subtitle">
                            AI 기반 취업 준비 활동 기록 & 분석 플랫폼
                        </h3>
                        <p className="jobrecord-tagline">
                            기록을 넘어, 성장을 데이터로 관리하다.
                        </p>

                        <div className="jobrecord-meta">
                            <div className="meta-row">
                                <span className="meta-label">프로젝트 성격</span>
                                <span>Personal Project</span>
                            </div>
                            <div className="meta-row">
                                <span className="meta-label">역할</span>
                                <span>Planning / UXUI / Front-end / Back-end</span>
                            </div>
                            <div className="meta-row">
                                <span className="meta-label">완료</span>
                                <span>2026. 02. 12</span>
                            </div>
                        </div>
                    </div>

                    {/* Right App Image */}
                    <div className="jobrecord-overview-right">
                        <img
                            src="/Home.png"
                            alt="JobRecord App Preview"
                            className="jobrecord-app-image"
                        />
                    </div>

                </div>
            </section>
            {/* JobRecord Overview Detail Section */}
            <section className="jobrecord-detail-section">
                <div className="jobrecord-detail-container">

                    <header className="jobrecord-detail-header">
                        <div className="jobrecord-detail-page-title">
                            Overview
                        </div>
                        <h2 className="jobrecord-detail-main-heading">
                            취업 준비는 기록되지만, 관리되지는 않는다.
                        </h2>
                    </header>

                    <div className="jobrecord-detail-grid">

                        {/* Problems */}
                        <div className="jobrecord-problems">

                            <div className="jobrecord-problem-card">
                                <h3>활동은 많지만 체계가 없다</h3>
                                <p>산발적인 활동으로 인한 비효율</p>
                            </div>

                            <div className="jobrecord-problem-card">
                                <h3>목표 대비 성취도를 모른다</h3>
                                <p>정량적 성과 측정 불가</p>
                            </div>

                            <div className="jobrecord-problem-card">
                                <h3>카테고리별 편중을 인지하지 못한다</h3>
                                <p>편향된 활동 패턴 미인식</p>
                            </div>

                            <div className="jobrecord-problem-card">
                                <h3>감각에 의존한 자기평가</h3>
                                <p>객관적 피드백 부재</p>
                            </div>

                        </div>

                        {/* Solution */}
                        <div className="jobrecord-solution">
                            <h2>취업 준비 과정은 다양한 활동으로 구성되지만,<br/>
                                기록은 흩어져 있고 성과는 체계적으로 관리되지 않습니다.</h2>
                            <p>
                                JobRecord는 이러한 문제를 해결하기 위해
                                취준생의 활동을 카테고리 기반으로 구조화하고,
                                목표 대비 달성률과 활동 패턴을 데이터로 분석하여
                                성장을 수치화하는 활동 관리 플랫폼으로 기획되었습니다.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* JobRecord Comparison Slide */}
            <section className="jobrecord-comparison-slide">
                <div className="comparison-flat-wrapper">

                    {/* Background Floating Keywords */}
                    <div className="comparison-bg-circles">

                        {/* Left Side Keywords */}
                        <div className="bg-circle bg-left bg-1">비효율적인</div>
                        <div className="bg-circle bg-left bg-2">감각적인</div>
                        <div className="bg-circle bg-left bg-3">불명확한</div>

                        {/* Right Side Keywords */}
                        <div className="bg-circle bg-right bg-4">데이터 기반</div>
                        <div className="bg-circle bg-right bg-5">구조화된</div>
                        <div className="bg-circle bg-right bg-6">성장 중심</div>

                    </div>

                    <div className="comparison-flat-container">

                        {/* Left Side */}
                        <div className="comparison-left">
                            <div className="comparison-content">
                                <h3 className="comparison-title">
                                    기존 취업 준비 방식
                                </h3>
                                <ul className="comparison-list">
                                    <li>활동은 많지만 체계가 없다</li>
                                    <li>목표 대비 성취도를 모른다</li>
                                    <li>카테고리 편중을 인지하지 못한다</li>
                                    <li>감각에 의존한 자기평가</li>
                                </ul>
                            </div>
                        </div>

                        {/* Center */}
                        <div className="comparison-center">
                            <span>
                                DATA-DRIVEN<br/>
                                GROWTH<br/>
                                PLATFORM
                            </span>
                        </div>

                        {/* Right Side */}
                        <div className="comparison-right">
                            <div className="comparison-content">
                                <h3 className="comparison-title">
                                    JOB RECORD
                                </h3>
                                <ul className="comparison-list">
                                    <li>활동을 구조화</li>
                                    <li>목표 대비 달성률 수치화</li>
                                    <li>카테고리 분석 시각화</li>
                                    <li>AI 기반 피드백 제공</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* JobRecord User Flow Section */}
            <section className="jobrecord-userflow-section">
                <div className="userflow-container">

                    {/* LEFT – FLOW */}
                    <div className="userflow-diagram">

                        <div className="flow-horizontal">

                            {/* Auth */}
                            <div className="flow-group">
                                <div className="userflow-node primary">Start</div>
                                <div className="userflow-node">로그인 여부 확인</div>
                                <div className="userflow-node">온보딩</div>
                                <div className="userflow-node">로그인 / 회원가입</div>
                                <div className="userflow-node">가입 완료</div>
                            </div>

                            <div className="flow-connector"></div>

                            {/* Home */}
                            <div className="flow-group">
                                <div className="userflow-node highlight">홈</div>
                            </div>

                            <div className="flow-connector"></div>

                            {/* Activity */}
                            <div className="flow-group">
                                <div className="userflow-node">활동 추가</div>
                                <div className="userflow-node">활동 저장</div>
                                <div className="userflow-node">홈 업데이트</div>
                            </div>

                            <div className="flow-connector"></div>

                            {/* AI */}
                            <div className="flow-group">
                                <div className="userflow-node">AI 활동 분석</div>
                                <div className="userflow-node">30일 데이터 분석</div>
                                <div className="userflow-node">카테고리 편중 분석</div>
                                <div className="userflow-node">개선 방향 추천</div>
                            </div>

                            <div className="flow-connector"></div>

                            {/* Report */}
                            <div className="flow-group">
                                <div className="userflow-node">리포트</div>
                                <div className="userflow-node">주간 / 월간 통계</div>
                                <div className="userflow-node">카테고리 비율 차트</div>
                                <div className="userflow-node">목표 달성률</div>
                            </div>

                            <div className="flow-connector"></div>

                            {/* MyPage */}
                            <div className="flow-group">
                                <div className="userflow-node">마이페이지</div>
                                <div className="userflow-node">프로필 수정</div>
                                <div className="userflow-node">목표 시간 설정</div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT – DESCRIPTION */}
                    <div className="userflow-info">
                        <h2 className="userflow-title">User Flow</h2>
                        <p className="userflow-description">
                            로그인부터 활동 기록, AI 분석, 리포트까지
                            모든 기능이 데이터 흐름으로 연결됩니다.
                            각 단계는 사용자의 성장 지표를 형성하며
                            하나의 구조화된 경험을 완성합니다.
                        </p>
                    </div>

                </div>
            </section>

            <section className="showcase-wrapper">
                <div className="showcase-container">

                    {/* Left */}
                    <div className="showcase-info">
                        <h1 className="showcase-title">App Flow</h1>
                        <h2 className="showcase-subtitle">
                            JOB RECORD 주요 화면 구성
                        </h2>
                        <p className="showcase-description">
                            홈 대시보드에서 활동 추가, AI 분석, 리포트까지
                            사용자의 전체 여정을 보여줍니다.
                            데이터 기반의 취업 준비를 위한 직관적인 인터페이스를 경험해보세요.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="screens-container">
                        <div className="screens-scroll">

                            {[
                                {img: "/Home2.png", label: "Home Dashboard"},
                                {img: "/Activity.png", label: "Activity"},
                                {img: "/Report.png", label: "Report"},
                                {img: "/AI.png", label: "AI Analysis"},
                                {img: "/ActivityDetail.png", label: "ActivityDetail"},
                                {img: "/My.png", label: "My Page"},
                            ].map((screen, i) => (
                                <div className="phone-mockup" key={i}>
                                    <div className="phone-notch"/>
                                    <div className="phone-screen">
                                        <img
                                            src={screen.img}
                                            alt={screen.label}
                                            className="phone-image"
                                        />
                                    </div>
                                    <div className="screen-label">{screen.label}</div>
                                </div>
                            ))}

                        </div>

                        <div className="flow-arrows">
                            <div className="arrow-dot"/>
                            <div className="arrow-line"/>
                            <div className="arrow-dot"/>
                            <div className="arrow-line"/>
                            <div className="arrow-dot"/>
                        </div>

                    </div>

                </div>
            </section>

            {/* AI Analysis Feature Section */}
            <section className="ai-feature-section">
                <div className="ai-bg-circles">
                    <div className="ai-circle ai-circle-1"/>
                    <div className="ai-circle ai-circle-2"/>
                    <div className="ai-circle ai-circle-3"/>
                </div>

                <div className="ai-feature-container">

                    {/* Left Content */}
                    <div className="ai-feature-content">
                        <h2 className="ai-feature-headline">
                            핵심 AI 기반 활동 분석 시스템
                        </h2>

                        <p className="ai-feature-sub">
                            데이터는 기록을 남기고,<br/>
                            AI는 방향을 제시합니다.
                        </p>

                        <div className="ai-feature-divider"/>

                        <p className="ai-feature-description">
                            최근 30일 활동 데이터를 기반으로
                            카테고리 분포, 목표 대비 달성률, 활동 패턴을 분석합니다.
                            편중 영역을 도출하고 구체적인 개선 방향과
                            다음 행동을 제안합니다.
                        </p>
                    </div>

                    {/* Right Phone Mockup */}
                    <div className="ai-phone-container">
                        <div className="ai-phone-frame">

                            <div className="ai-phone-notch"/>

                            <div className="ai-phone-screen">
                                <img
                                    src="/AI.png"
                                    alt="AI 분석 화면"
                                    className="ai-phone-image"
                                />
                            </div>

                            {/* ===== Annotation 1 ===== */}
                            <div className="ai-annotation a1">
                                <div className="ai-dot"/>
                                <div className="ai-line"/>
                                <div className="ai-label">
                                    최근 30일 데이터를 기반으로<br/>
                                    활동 패턴을 분석합니다.
                                </div>
                            </div>

                            {/* ===== Annotation 2 ===== */}
                            <div className="ai-annotation a2">
                                <div className="ai-dot"/>
                                <div className="ai-line"/>
                                <div className="ai-label">
                                    사용자의 최근 활동을 정량적으로<br/>
                                    요약해 보여주는 핵심 지표로 보여줍니다.
                                </div>
                            </div>

                            <div className="ai-annotation a3">
                                <div className="ai-dot"/>
                                <div className="ai-line"/>
                                <div className="ai-label">
                                    분석 결과를 기반으로 사용자의 다음 행동을<br/>
                                    제안하는 AI 인사이트 카드를 제공합니다.
                                </div>
                            </div>

                            <div className="ai-annotation a4">
                                <div className="ai-dot"/>
                                <div className="ai-line"/>
                                <div className="ai-label">
                                    분석 결과를 바탕으로 실행 가능한 <br/>
                                    다음 행동을 제안하여 제공합니다.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            <section className="experience-section">
                <div className="section-container">
                    <h2 className="section-title">경험 & 성장</h2>

                    <div className="timeline">

                        {/* 2024 */}
                        <div
                            className="timeline-item clickable"
                            onClick={() => scrollToProject("mood")}
                        >
                            <span className="timeline-year">2024</span>

                            <div className="timeline-content linked">
                                <div className="timeline-meta">
                                    <span className="project-badge launch">LAUNCH</span>
                                    <span className="project-name">Mood Diary</span>
                                </div>

                                <h3>모바일 감정 일기 앱 출시</h3>
                                <p>
                                    React Native 기반 감정 기록 앱을 개발하며
                                    상태 관리, UX 흐름, 로컬 데이터 저장 구조를 경험했습니다.
                                </p>
                            </div>
                        </div>

                        {/* 2025 */}
                        <div
                            className="timeline-item clickable"
                            onClick={() => scrollToProject("climb")}
                        >
                            <span className="timeline-year">2025</span>

                            <div className="timeline-content linked">
                                <div className="timeline-meta">
                                    <span className="project-badge launch">LAUNCH</span>
                                    <span className="project-name">Climb Community</span>
                                </div>

                                <h3>클라이밍 SNS 커뮤니티 플랫폼</h3>
                                <p>
                                    인증, 게시글, 이미지 업로드, 서버 배포까지
                                    실서비스 수준의 모바일 SNS 플랫폼을 구현했습니다.
                                </p>
                            </div>
                        </div>

                        {/* NOW */}
                        <div
                            className="timeline-item current clickable"
                            onClick={() => scrollToProject("JobRecord")}
                        >
                            <span className="timeline-year">NOW</span>

                            <div className="timeline-content linked">
                                <div className="timeline-meta">
                                    <span className="project-badge launch">LAUNCH</span>
                                    <span className="project-name">JobRecord</span>
                                </div>

                                <h3>AI 기반 취업 준비 활동 기록 & 분석 플랫폼</h3>
                                <p>
                                    기록을 넘어 성과를 수치화하고, 다음 행동까지 제안하는 성장 관리 플랫폼입니다.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="stack-section">
                <div className="section-container">
                    <h2 className="section-title">기술 스택 상세</h2>

                    <div className="stack-grid">
                        <div className="stack-card">
                            <h3>Backend</h3>
                            <ul>
                                <li>Spring Boot, JPA, QueryDSL</li>
                                <li>JWT 인증</li>
                                <li>REST API 설계</li>
                            </ul>
                        </div>

                        <div className="stack-card">
                            <h3>Frontend</h3>
                            <ul>
                                <li>React, TypeScript</li>
                                <li>UX 중심 컴포넌트 설계</li>
                                <li>모바일 반응형 & 애니메이션</li>
                            </ul>
                        </div>

                        <div className="stack-card">
                            <h3>Infrastructure</h3>
                            <ul>
                                <li>AWS EC2, RDS, S3, CloudFront</li>
                                <li>Docker 기반 환경 구성</li>
                                <li>GitHub Actions CI/CD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="projects-section">
                <h2 className="section-title">주요 프로젝트</h2>

                <div className="projects-grid">

                    <div
                        id="project-mood"
                        className="project-card"
                        onClick={() => window.open("https://github.com/sheepheeseok/mood_diary.git", "_blank")}
                    >
                        <img src="/project1.png" className="project-img" alt="Mood Diary"/>

                        <div className="project-overlay">
                            <p className="project-number">01</p>
                            <h3 className="project-title">Mood Diary</h3>
                            <p className="project-desc">
                                감정 기록 데이터를 구조화해 패턴을
                                분석하고 시각화하는 감정 저널링 앱입니다.
                            </p>
                            <span className="project-arrow">→</span>
                        </div>
                    </div>

                    <div
                        id="project-climb"
                        className="project-card"
                        onClick={() => window.open("https://github.com/sheepheeseok/ClimbCommunity.git", "_blank")}
                    >
                        <img src="/project2.png" className="project-img" alt="Mood Diary"/>

                        <div className="project-overlay">
                            <p className="project-number">02</p>
                            <h3 className="project-title">클라이밍 커뮤니티</h3>
                            <p className="project-desc">
                                미디어 업로드, 태깅, 소셜 그래프를 기반으로
                                클라이밍 활동을 기록·공유하는 SNS 플랫폼입니다.
                            </p>
                            <span className="project-arrow">→</span>
                        </div>
                    </div>

                    <div
                        id="project-JobRecord"
                        className="project-card"
                        onClick={() => window.open("https://github.com/sheepheeseok/job-record-app.git", "_blank")}
                    >
                        <img src="/jobrecord.png" className="project-img" alt="Mood Diary"/>

                        <div className="project-overlay">
                            <p className="project-number">03</p>
                            <h3 className="project-title">Job Record</h3>
                            <p className="project-desc">
                                활동 기록, 카테고리 구조화, 목표 관리 데이터를 기반으로
                                취업 준비 과정을 분석·관리하는 플랫폼입니다.
                            </p>
                            <span className="project-arrow">→</span>
                        </div>
                    </div>

                </div>
            </section>


            {/* Contact Section */}
            <section className="contact-section">
                <h2 className="contact-title">LET'S IGNITE TOGETHER</h2>
                <a className="contact-email" href="mailto:sheeph001@gmail.com">sheeph001@gmail.com</a>

                <div className="social-links">
                    <a href="https://github.com/sheepheeseok" target="_blank">GITHUB</a>
                </div>
            </section>

        </div>
    );
}
