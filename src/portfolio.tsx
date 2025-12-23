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
                            onClick={() => scrollToProject("heal")}
                        >
                            <span className="timeline-year">NOW</span>

                            <div className="timeline-content linked">
                                <div className="timeline-meta">
                                    <span className="project-badge ing">ING</span>
                                    <span className="project-name">HealLink</span>
                                </div>

                                <h3>O2O 메디컬 플랫폼 개발 중</h3>
                                <p>
                                    병원·사용자 연결을 중심으로
                                    실제 비즈니스 흐름을 고려한 제품 설계를 진행하고 있습니다.
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
