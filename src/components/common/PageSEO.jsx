import Head from "next/head";
import React from "react";

const PageSEO = ({ title }) => {
  const maintitle = `My Tech Professionals — ${title}`;
  return (
    <>
      {title && (
        <Head>
          <title>{maintitle}</title>
          <meta name="title" content={`My Tech Professionals — ${title}`} />
          <meta
            name="description"
            content="My Tech Professionals is an IT company in hisar, that provides a range of software development and digital transformation services to businesses of all sizes. The company specializes in custom software development, web application development, mobile application development, and cloud computing solutions.
            My Tech Professionals is committed to delivering high-quality software products and services that meet the unique needs of each client. They work closely with their clients to understand their business objectives and then develop customized solutions that help them achieve their goals.
            In addition to software development, My Tech Professionals also provides a range of digital transformation services, including IT consulting, project management, and quality assurance. They use the latest technologies and industry best practices to ensure that their clients' digital transformation initiatives are successful.
            Overall, My Tech Professionals is a reliable and experienced IT partner that can help businesses leverage technology to drive growth and achieve their strategic objectives.
            "
          />
          <meta
            name="keywords"
            content="mytech Professionals , My Tech Professionals, Computer Language Training Services, MySQL Training …, Coding - Decoding Set - 01 - Accent Institute Hisar, coding block in hisar, coding className near me  ,Programming Languages classNamees in Hisar , My Tech Professionals in hisar, hisar,Best Coding Institute in Hisar  , it company in hisar , okk-code ,My Tech Professionals.com, hisar it company , it company, computer center in hisar , best computer center , best it company in hisar , best it company, best My Tech Professionals , best okk, best code , Custom software development, Web application development ,Mobile application development,Scalable solutions,
            Cloud computing solutions,Robust architecture,
            IT consulting, User-centered design,My Tech Professionals,best it company in hisar,
Hisar,
IT company, Software development,
Web development,
Mobile app development,
Software solutions,
Custom software development,
IT services,
Technology solutions,
Software engineering,
E-commerce solutions,
Digital marketing,
IT consulting,
UI/UX design,My Tech Professionals Hisar,
Top IT company,
Best IT services,
Trusted software development,
Reliable technology solutions,
Expert IT consulting,
Custom software development,
Innovative web development,
Mobile app experts,
Professional IT team,
Cutting-edge technology solutions,
High-quality software engineering,
Responsive web design,
Agile development methodology, Leading IT company,
Excellent IT services,
Exceptional software development,
Outstanding technology solutions,
Expert IT consulting,
Innovative web development,
Cutting-edge mobile app development,
Professional IT team,
Reliable IT solutions,
Custom software solutions,
High-quality software engineering,
Trusted IT partner,
Client-focused approach,
Reliable and efficient service,
Customer satisfaction guarantee,
            Digital transformation, E-commerce development,
            Project management, Content management systems (CMS),
            Quality assurance, Mobile-responsive design,
            Experienced developers, API development,
            Innovative solutions, Front-end development,
            Reliable IT partner, Back-end development, 
            Trusted technology partner, Open-source technologies,
            Business growth, Big data solutions,
            Industry best practices, Cloud-based solutions,
            Cutting-edge technologies, Cross-platform development,
            Client satisfaction, Quality assurance and testing,
            My Tech Professionals, Maintenance and support services,
            Code, Digital marketing services,
            IT solutions, Social media management,
            Innovation, Search engine optimization (SEO),
            Customization, Pay-per-click advertising (PPC),
            Software development, Software as a Service (SaaS),
            Technology partner, Platform as a Service (PaaS),
            Digital transformation, Infrastructure as a Service (IaaS),
            Reliable services, Hybrid cloud solutions,
            Growth-oriented solutions, Multi-cloud solutions,
            Cutting-edge technologies, Public cloud solutions,
            Client satisfaction, Private cloud solutions,
            Experienced team, Virtualization,
            Software engineering, Containerization,
            Full-stack development, Microservices,
            UI/UX design, Legacy system modernization,
            Artificial intelligence (AI), Application integration,
           Machine learning (ML), Business intelligence (BI),
            Data science, Analytics , Chatbot development,
            Internet of Things (IoT), Natural language processing (NLP),
            Blockchain technology, Robotic process automation (RPA),
            Cybersecurity, Voice-enabled solutions,
            Cloud migration, Augmented reality (AR),
            DevOps, Virtual reality (VR),
            Agile methodology,
            Software testing,
            Product development,
            Enterprise solutions,
            Business process automation,
            Outsourcing services,
            Continuous integration/continuous delivery (CI/CD),
            
            "
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="" />
          <meta property="og:title" content={` My Tech Professionals — ${title}`} />
          <meta
            property="og:description"
            content="My Tech Professionals is a leading IT company specializing in software development, web and mobile application development, and cloud computing solutions. They help businesses leverage technology to drive growth and provide digital transformation services such as IT consulting and project management. With a team of experienced developers, My Tech Professionals is a trusted IT partner for businesses of all sizes."
          />
          <meta property="og:image" content="" />

          <meta property="twitter:card" content="" />
          <meta
            property="twitter:url"
            content="https://twitter.com/My Tech Professionals2023"
          />
          <meta property="twitter:title" content={`My Tech Professionals — ${title}`} />
          <meta
            property="twitter:description"
            content="Enhance your skills with our IT training programs,  Internship and Development programs on various topics."
          />
          <meta property="twitter:image" content="" />
        </Head>
      )}
    </>
  );
};

export default PageSEO;
