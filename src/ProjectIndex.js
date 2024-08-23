import expensior from "./expensior.png"
import weather from "./weather.png"
import price from "./price.png"
import tripster from "./tripster.png"
import Mdrs from "./mdrs.png"

const project = [
  {
    key: 1,
    image:
      expensior,
    title: "Expensior",
    description:
      "The Expensior app simplifies financial tracking by offering a user-friendly interface to input and categorize expenses. What sets us apart is the integration of vivid expense charts. Users can visualize their spending habits and make informed financial decisions. It's a powerful tool for budgeting and managing your personal finances.",
    link: "https://github.com/Asuboor/Expensior-ExpenseManager",
  },
  {
    key: 2,
    image:
      price,
    title: "Price Notifier",
    description:
      "The Price Notifier website is your shopping companion! Simply input the Product/Stock/Crypto URL, your email and the desired price, and we'll monitor it for you. When the price drops to your set amount, we'll send you an email alert. Never miss a deal again! Save time, save money, and enjoy hassle-free shopping.",
    link: "https://pricenotifier.onrender.com/",
  },
  {
    key: 3,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    title: "Blog App",
    description:
      "This is an ultimate platform for effortless content creation and consumption. Explore an array of engaging articles, interact with fellow bloggers, and stay informed with personalized recommendations. Effortlessly express yourself while connecting with a vibrant community of writers. Whether you're a seasoned blogger or a newbie. Write, read, and connect like never before with our intuitive blog app.",
    link: "https://github.com/Asuboor/Blog_App",
  },
  {
    key: 4,
    image:
      weather,
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
  {
    key: 5,
    image:
      Mdrs,
    title: "Multi-domain Recommender System",
    description:
      "The Multi-Domain Recommender System is an advanced platform designed to transform content discovery across sectors like movies, books, and dining. Utilizing ReactJS for the frontend and a robust backend with ExpressJS, Node.js, and MongoDB, it ensures secure, personalized recommendations. Powered by machine learning and hosted on AWS, the system offers model-based and prompt-based suggestions, prioritizing user privacy and satisfaction.",
    link: "https://github.com/Asuboor/Multi-domain-Recommender-Systems",
  },
  {
    key: 6,
    image:
      "https://private-user-images.githubusercontent.com/106346130/356198864-7a45bebc-7063-41de-9dbf-7704cac5af38.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ0MTE1MTksIm5iZiI6MTcyNDQxMTIxOSwicGF0aCI6Ii8xMDYzNDYxMzAvMzU2MTk4ODY0LTdhNDViZWJjLTcwNjMtNDFkZS05ZGJmLTc3MDRjYWM1YWYzOC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyM1QxMTA2NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05Zjc4YWJjMzYxNTQ2YjBmZDI2MWE0ZTgzNmRiMTNkMDg1NDczYzdiMzgxNTBhMWQ3OGJjOGQyMWUyZDQ4ZGM5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.6BJMlT1wLJm7FML5Myfc_AxD307Af1CLwW0M9gjcvIg",
    title: "AWS VProfile setup on AWS",
    description:
      "This project establishes a scalable AWS infrastructure for hosting the VProfile Java application, ensuring high availability and performance. Key technologies include Amazon EC2 for hosting, CloudFront for content delivery, and RDS for secure data storage. Auto Scaling and CloudWatch enable efficient resource management, while ElastiCache and Amazon MQ enhance application responsiveness. The setup provides a reliable, high-performance environment.",
    link: "https://github.com/Asuboor/AWS_vprofile",
  },
  {
    key: 7,
    image:
      "https://private-user-images.githubusercontent.com/106346130/356199213-ad5d8de5-98d5-48f5-9a9f-e4da38225912.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ0MTE2NjcsIm5iZiI6MTcyNDQxMTM2NywicGF0aCI6Ii8xMDYzNDYxMzAvMzU2MTk5MjEzLWFkNWQ4ZGU1LTk4ZDUtNDhmNS05YTlmLWU0ZGEzODIyNTkxMi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODIzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyM1QxMTA5MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05OTEyY2VmZWRlNjUxNDVlNTBlNjA1Y2I2ZGU3MTNlYzM5NzlmYWU1N2NiMTVlZTk3ZmE2ZjE4ZWQ1MTcxNDg4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.VocHhPZWin04OG0egI9lsoMPlmJYfOUIf2ebEuAZgnQ",
    title: "AWS CI/CD",
    description:
      "This project showcases a robust CI/CD pipeline for deploying a Java Full Stack application on AWS. The pipeline automates build, test, and deployment processes using AWS services like CodePipeline, CodeBuild, and Elastic Beanstalk. With Bitbucket for source control and RDS for database management, the setup ensures seamless integration, efficient deployment, and high availability for the application.",
    link: "https://github.com/Asuboor/AWS_vprofile/tree/AWS-ci/cd-pipeline",
  },
];

export default project;
