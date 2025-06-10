import { Icons } from "~/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  // "https://dillion.io",
  skills: [
    "Java",
    "Python",
    "Scala",
    "MySQL",
    "Redis",
    "Kafka",
    "Spark",
    "Flink",
    "Hadoop",
    "Hive",
    "HBase",
    "HDFS",
  ],

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
  ],
  education: [
    {
      school: "Buildspace",
      href: "https://buildspace.so",
      degree: "s3, s4, sf1, s5",
      logoUrl: "/buildspace.jpg",
      start: "2023",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Hunger Map",
      href: "https://hungermap.wfp.org/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Number of countries with very high levels of hunger. Food Security. Population. No Data. People with insufficient food consumption. No Data. Nutrition.",
      technologies: [
        "MaxCompute",
        "DataWorks",
        "OSS",
        "RDS MySQL",
        "DataV",
        "DataFrame",
        "Pandas",
      ],
      links: [
        {
          type: "hungermap.wfp.org",
          href: "https://hungermap.wfp.org/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "https://pub-075a31fca232457a9c7571729dc03ae7.r2.dev/hunger-map.mp4",
    },
    {
      title: "共富大脑",
      href: "https://www.zjhy.gov.cn/art/2021/12/16/art_1634799_59036635.html",
      dates: "June 2023 - Present",
      active: true,
      description:
        "XX市为实现市区人民的整体富裕，通过数字政府、数字经济将各个政务数据部门的数据、企业的数据以及整合第三方相关的数据，通过一站式的数据仓库，模型分析及指标系统的搭建，形成整个YY区政府的大脑系统。",
      technologies: [
        "MaxCompute",
        "DataWorks",
        "Python",
        "RDS MySQL",
      ],
      links: [
        {
          type: "gfdn",
          href: "https://www.zjhy.gov.cn/art/2021/12/16/art_1634799_59036635.html",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/projects/gfgf.png",
      video: "",
    },
    {
      title: "CarsoSEARS",
      href: "https://www.sears.com.mx/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "为美西SEARS构建线上系统，实现商品、订单、库存、采购、会员等多维度数据的统一管理和智能分析，支持日均百万级订单处理，为业务决策提供实时数据支支持，平台整体性能提升60%，数据分析效率提升90%",
      technologies: [
        "MaxCompute",
        "Dataphin",
        "RDS MySQL",
        "QuickBI",
        "Python",
        "Pandas"
      ],
      links: [
        {
          type: "sears.com.mx",
          href: "https://www.sears.com.mx/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/carso.png",
      video: "",
    },
    {
      title: "E家富",
      href: "http://zjpubservice.zjzwfw.gov.cn/jyxxgk/002002/002002004/20230522/75bda1b0-09fd-4769-8d8f-22891398d068.html",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "项⽬基于“e 家富 ”数据仓，获取住房数据、新⽣⼉数据、⽣育保险数据、就诊结算数据、教育学籍数据等，进⾏⼆次加⼯处理，集成共富背景下各种类型家庭的算法识别和研判模型，智能识别不同类型共富家庭，辅助并推动以家庭为单位的财税政策体系落地",
      technologies: [
        "MaxCompute",
        "DataWorks",
        "Python",
        "RDS MySQL",
        "Log4j"
      ],
      links: [
        {
          type: "ejf",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/ejf.png",
      video:
        "",
    },

    {
      title: "HKExpress POC",
      href: "https://www.hkexpress.com/en",
      dates: "April 2023 - March 2024",
      active: false,
      description:
        "香港快运航空针对现有历史数据和新增数据，通过阿里云平台实现价值数据的挖掘、数据仓库的分层规范设计、优化数据建模并最终在平台层实现数据监控预警",
      technologies: [
        "MaxCompute",
        "DataWorks",
        "Python",
        "RDS MySQL",
      ],
      links: [
        {
          type: "hkexpress",
          href: "https://www.hkexpress.com/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/hkexpress.png",
      video:
        "",
    },

    {
      title: "Big Data Wiki",
      href: "https://xufei.biz/",
      dates: "April 2023 - March 2024",
      active: false,
      description:
        "个人大数据生态Wiki笔记，大数据组件包括整个数据架构、数据集成、数据开发、数据建模、数据分析、数据标准、数据运维、数据什么周期等。编程开发：Python、Shell等",
      technologies: [
        "Quartz",
        "Type Scripty",
      ],
      links: [
        {
          type: "xufei.wiki",
          href: "https://xufei.wiki/en",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/wiki.png",
      video:
        "",
    },
  ],
} as const;
