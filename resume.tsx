%-------------------------
% Resume in Latex
% Author : Jake Gutierrez
% Based off of: https://github.com/sb2nov/resume
% License : MIT
%------------------------

\documentclass[letterpaper,11pt]{article}

\usepackage{latexsym}
\usepackage[empty]{fullpage}
\usepackage{titlesec}
\usepackage{marvosym}
\usepackage[usenames,dvipsnames]{color}
\usepackage{verbatim}
\usepackage{enumitem}
\usepackage[hidelinks]{hyperref}
\usepackage{fancyhdr}
\usepackage[english]{babel}
\usepackage{tabularx}
\input{glyphtounicode}


%----------FONT OPTIONS----------
% sans-serif
% \usepackage[sfdefault]{FiraSans}
% \usepackage[sfdefault]{roboto}
% \usepackage[sfdefault]{noto-sans}
% \usepackage[default]{sourcesanspro}

% serif
% \usepackage{CormorantGaramond}
% \usepackage{charter}


\pagestyle{fancy}
\fancyhf{} % clear all header and footer fields
\fancyfoot{}
\renewcommand{\headrulewidth}{0pt}
\renewcommand{\footrulewidth}{0pt}

% Adjust margins
\addtolength{\oddsidemargin}{-0.5in}
\addtolength{\evensidemargin}{-0.5in}
\addtolength{\textwidth}{1in}
\addtolength{\topmargin}{-.5in}
\addtolength{\textheight}{1.0in}

\urlstyle{same}

\raggedbottom
\raggedright
\setlength{\tabcolsep}{0in}

% Sections formatting
\titleformat{\section}{
  \vspace{-4pt}\scshape\raggedright\large
}{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

% Ensure that generate pdf is machine readable/ATS parsable
\pdfgentounicode=1

%-------------------------
% Custom commands
\newcommand{\resumeItem}[1]{
  \item\small{
    {#1 \vspace{-2pt}}
  }
}

\newcommand{\resumeSubheading}[4]{
  \vspace{-2pt}\item
    \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
      \textbf{#1} & #2 \\
      \textit{\small#3} & \textit{\small #4} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubSubheading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \textit{\small#1} & \textit{\small #2} \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeProjectHeading}[2]{
    \item
    \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
      \small#1 & #2 \\
    \end{tabular*}\vspace{-7pt}
}

\newcommand{\resumeSubItem}[1]{\resumeItem{#1}\vspace{-4pt}}

\renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

\newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]}
\newcommand{\resumeSubHeadingListEnd}{\end{itemize}}
\newcommand{\resumeItemListStart}{\begin{itemize}}
\newcommand{\resumeItemListEnd}{\end{itemize}\vspace{-5pt}}

%-------------------------------------------
%%%%%%  RESUME STARTS HERE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%


\begin{document}

%----------HEADING----------
% \begin{tabular*}{\textwidth}{l@{\extracolsep{\fill}}r}
%   \textbf{\href{http://sourabhbajaj.com/}{\Large Sourabh Bajaj}} & Email : \href{mailto:sourabh@sourabhbajaj.com}{sourabh@sourabhbajaj.com}\\
%   \href{http://sourabhbajaj.com/}{http://www.sourabhbajaj.com} & Mobile : +1-123-456-7890 \\
% \end{tabular*}

\begin{center}
    \textbf{\Huge \scshape Satyendra Singh} \\ \vspace{1pt}
    \small +91 9584224133 $|$ \href{mailto:x@x.com}{\underline{satyendra@su.edu}} $|$ 
    \href{https://linkedin.com/in/...}{\underline{linkedin.com/in/satyendra}} $|$
    \href{https://github.com/...}{\underline{github.com/satyendra}}
\end{center}


%-----------Objective -----------
\section{Objective}
Proactive Full Stack Developer with 2 years of experience and cross-domain expertise in IoT and embedded systems, aspiring to lead impactful tech initiatives and drive product excellence.

%-----------EDUCATION-----------
\section{Education}
  \resumeSubHeadingListStart
    \resumeSubheading
      {Lovely Professional University}{Jalandhar, Punjab}
      {Bachelor of Science, in Electronics}{Aug. 2013 -- May 2018}
    \resumeSubheading
      {Aadarsh Sarvodaya Higher Secondary School}{Anuppur, M.P.}
      {Science}{Aug. 2011 -- May 2012}
    \resumeSubheading
      {Aadarsh Sarvodaya High School}{Anuppur, M.P.}
      {}{Aug. 2009 -- May 2010}
  \resumeSubHeadingListEnd


%-----------EXPERIENCE-----------
\section{Experience}
  \resumeSubHeadingListStart

    \resumeSubheading
      {Houston System}{may 2023 -- Present}
      {Software Engineer}{Greater Noida, U.P.}
      \resumeItemListStart
        \resumeItem{Developed a REST API using Node js and My-SQL to store data from learning management systems}
        \resumeItem{Developed a full-stack web application using Node.js, React, MySQL, and Docker, integrated with hardware components such as boom barriers, turnstiles, and tripods to build an access control system.}
        \resumeItem{Gained hands-on experience with WebSocket, GraphQL, Apollo Client and Server, and Apache Kafka for implementing real-time communication and event-driven architecture.}
        \resumeItem{Worked on real-time hardware integration using protocols such as TCP/IP, UDP, HTTP, WebSocket, RS-485 and REST API.}
      \resumeItemListEnd
      
% -----------Multiple Positions Heading-----------
%    \resumeSubSubheading
%     {Software Engineer I}{Oct 2014 - Sep 2016}
%     \resumeItemListStart
%        \resumeItem{Apache Beam}
%          {Apache Beam is a unified model for defining both batch and streaming data-parallel processing pipelines}
%     \resumeItemListEnd
%    \resumeSubHeadingListEnd
%-------------------------------------------

  \resumeSubHeadingListEnd


%-----------PROJECTS-----------
\section{Projects}
    \resumeSubHeadingListStart
      \resumeProjectHeading
          {\textbf{Parking Guidace System} $|$ \emph{Node, React, My-SQL, Docker, Git}}{June 2023 -- January 2024}
          \resumeItemListStart
            \resumeItem{Developed a full-stack web application using with Node serving a REST API with React as the frontend}
            \resumeItem{Integrated parking sensors to detect vehicle presence, updating real-time slot occupancy status in the web interface}
            \resumeItem{Displayed real-time parking availability (per floor) on a P10 LED display using sensor data.}
            \resumeItem{Used Redis for asynchronous tasks}
          \resumeItemListEnd
          
 \resumeProjectHeading
        {\textbf{Mullanpur Stadium Access Control System} $|$ \emph{Node, MySQL, Indexing, T20 machine }}{February 2024 -- August 2024}
        \resumeItemListStart
          \resumeItem{Designed and deployed an access control system across multiple gates in the Mullanpur Cricket Stadium for various categories including BCCI officials, Punjab Kings team members, service staff, and ticket holders.}
          \resumeItem{Established an efficient ticket validation process by integrating QR and RFID scanners at entry points, leading to the processing of over 10,000 tickets per event with a 98 \% accuracy rate in validation.}
          \resumeItem{Developed gate-level authorization logic—e.g., team gates exclusively allow Punjab Kings team cards; BCCI gates only allow BCCI officials.}
          \resumeItem{Ensured real-time validation and access control by connecting scanning systems to a centralized Flask-based backend and MySQL database.}
          \resumeItem{Optimized gate operations by ensuring that users are only allowed through gates based on their access type and ticket permissions.}
        \resumeItemListEnd


              \resumeProjectHeading
          {\textbf{ANPR} $|$ \emph{Rest API Integratin, React, Redux, Talwind Css, GraphQL, Git}}{September 2024 -- December 2024}
          \resumeItemListStart
            \resumeItem{Built the frontend using React.js, Tailwind CSS, and TypeScript with distinct access levels—Admins can manage and edit records, while Operators have read-only access.}
            \resumeItem{Integrated the system into a paid parking management solution using ANPR technology to automate entry and exit logging.}
            \resumeItem{Implemented CI/CD using TravisCI to ensure reliable deployments and streamline development workflows.}
            \resumeItem{Developed and consumed REST and GraphQL APIs to efficiently manage vehicle data, user roles, and access logs within the system.}
          \resumeItemListEnd

    \resumeProjectHeading
{\textbf{Houston System Company Website} $|$ \emph{React.js, Tailwind CSS, TypeScript, Rest API, Git}} {January 2025 -- Present}
\resumeItemListStart
  \resumeItem{Designed and developed a responsive and SEO-friendly company website for Houston System to showcase products, solutions, and services.}
  \resumeItem{Built the frontend using React.js, Tailwind CSS, and TypeScript for a clean, modern, and mobile-friendly UI.}
  \resumeItem{Created modular and reusable UI components to ensure consistency and ease of maintenance across the site.}
  \resumeItem{Integrated backend services using Node.js and Express to manage contact forms, product data, content updates, and a chatbot for real-time customer interaction. Implemented WhatsApp chat integration to collect customer feedback directly through the website.}
  \resumeItem{Set up version control and code collaboration via Git, ensuring streamlined development and peer reviews.}
\resumeItemListEnd

    \resumeSubHeadingListEnd



%
%-----------PROGRAMMING SKILLS-----------
\section{Technical Skills}
 \begin{itemize}[leftmargin=0.15in, label={}]
    \small{\item{
     \textbf{Languages}{: Python, C/C++, My-SQL, JavaScript, HTML/CSS} \\
     \textbf{Frameworks}{: React, Node.js, Flask, Django, Material-UI, Bootstrap} \\
     \textbf{Developer Tools}{: Git, Docker, Kubernet, Dev-Ops, AWS Cloud Platform, VS Code, Visual Studio, PyCharm} \\
     \textbf{Libraries}{: pandas, NumPy, Matplotlib}
 \end{itemize}


%-------------------------------------------
\end{document}
