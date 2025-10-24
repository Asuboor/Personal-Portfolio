import expensior from "./expensior.png";
import weather from "./weather.png";
import price from "./price.png";
import tripster from "./tripster.png";
import Mdrs from "./mdrs.png";
import awssetup from "./aws-1.jpg";
import awscicd from "./aws-cicd-2.png";
import GitOps from "./GitOps-Architecture.png"
import ITinfrastructure from "./IT-Infrastructure.jpg"
const project = [
    {
        key: 1,
        image: ITinfrastructure,
        title: "Building a Corporate IT Infrastructure",
        description:
            "Designed and deployed a real-world Windows Server 2019 infrastructure simulating a corporate environment. Configured Active Directory, Group Policies, file sharing, security hardening, and cloud backups. Overcame GPO and permission conflicts, mastering system administration, troubleshooting, and automation. Turned complex challenges into a powerful hands-on learning experience to strengthened my IT foundation.",
        link: "https://abdulsuboor.notion.site/Local-Windows-Server-2019-Corporate-IT-Infrastructure-Project-24cbdf64ccc680429f36f37d1af359b9",
    },
  {
    key: 2,
    image: GitOps,
    title: "GitOps Deployment of VProfile Application",
    description:
    "The deployment of a Java-based VProfile application was accomplished using GitOps methodologies, significantly enhancing operational efficiency in cloud environments. SonarCloud provided artifact storage, while AWS services such as EKS for container orchestration, ECR for secure image repositories, and VPC for networking were utilized alongside Terraform and GitHub Actions for CI/CD workflows.",
    link: "https://abdulsuboor.notion.site/GitOps-Project-10abdf64ccc680fca5dde0c575cf9402",
  },
  {
    key: 3,
    image: Mdrs,
    title: "Recom-Ai: Multi-domain Recommender System",
    description:
      "The Multi-Domain Recommender System is an advanced platform designed to transform content discovery across sectors like movies, books, and dining. Utilizing ReactJS for the frontend and a robust backend with ExpressJS, Node.js, and MongoDB, it ensures secure, personalized recommendations. Powered by machine learning and hosted on AWS, the system offers model-based and prompt-based suggestions, prioritizing user privacy and satisfaction.",
    link: "https://github.com/Asuboor/Multi-domain-Recommender-Systems",
  },
  {
    key: 4,
    image: awssetup,
    title: "AWS VProfile setup on AWS",
    description:
      "This project establishes a scalable AWS infrastructure for hosting the VProfile Java application, ensuring high availability and performance. Key technologies include Amazon EC2 for hosting, CloudFront for content delivery, and RDS for secure data storage. Auto Scaling and CloudWatch enable efficient resource management, while ElastiCache and Amazon MQ enhance application responsiveness. The setup provides a reliable, high-performance environment.",
    link: "https://github.com/Asuboor/AWS_vprofile",
  },
  {
    key: 5,
    image: awscicd,
    title: "AWS CI/CD",
    description:
    "This project showcases a robust Continuous Integration and Continuous Deployment (CI/CD) pipeline designed for deploying a Java Full Stack application on AWS. The pipeline effectively automates critical processes, including build, test, and deployment, utilizing various AWS services such as CodePipeline, CodeBuild, and Elastic Beanstalk. By integrating Bitbucket for source control and RDS for database management, the setup ensures seamless integration, efficient deployment, and high availability for the application.",
    link: "https://github.com/Asuboor/AWS_vprofile/tree/AWS-ci/cd-pipeline",
  },
  {
    key: 6,
    image: expensior,
    title: "Expensior",
    description:
      "The Expensior app simplifies financial tracking by offering a user-friendly interface to input and categorize expenses. What sets us apart is the integration of vivid expense charts. Users can visualize their spending habits and make informed financial decisions. It's a powerful tool for budgeting and managing your personal finances.",
    link: "https://github.com/Asuboor/Expensior-ExpenseManager",
  },
  {
    key: 7,
    image: price,
    title: "Price Notifier",
    description:
      "The Price Notifier website is your shopping companion! Simply input the Product/Stock/Crypto URL, your email and the desired price, and we'll monitor it for you. When the price drops to your set amount, we'll send you an email alert. Never miss a deal again! Save time, save money, and enjoy hassle-free shopping.",
    link: "https://pricenotifier.onrender.com/",
  },
  // {
  //   key: 7,
  //   image:
  //     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  //   title: "Blog App",
  //   description:
  //     "This is an ultimate platform for effortless content creation and consumption. Explore an array of engaging articles, interact with fellow bloggers, and stay informed with personalized recommendations. Effortlessly express yourself while connecting with a vibrant community of writers. Whether you're a seasoned blogger or a newbie. Write, read, and connect like never before with our intuitive blog app.",
  //   link: "https://github.com/Asuboor/Blog_App",
  // },
  {
    key: 8,
    image: weather,
    title: "My Weather Updates",
    description:
      "It provides real-time weather information with data sourced from the OpenWeatherMap API. Users can easily access current weather readings for any location worldwide. The site displays key weather data, including temperature, humidity, wind speed, and conditions. This is a reliable resource for staying informed about the weather in your area or any place you're interested in. ",
    link: "https://myweatherupdates.netlify.app/",
  },
  // {
  //   key: 5,
  //   image:
  //     tripster,
  //   title: "Tripster",
  //   description:
  //     "This is an intrutive User Interface based website ",
  //   link: "https://tripsteruiux.netlify.app/",
  // },
 
  
];

export default project;
