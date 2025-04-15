"use strict";
exports.__esModule = true;
exports.revalidate = exports.Metadata = exports.satisfies = exports.metadata = void 0;
var Container_1 = require("~/components/ui/Container");
var blur_fade_1 = require("~/components/magicui/blur-fade");
var project_card_1 = require("~/app/(main)/projects/project-card");
var resume_1 = require("~/data/resume");
var BLUR_FADE_DELAY = 0.04;
// import OrbitingCircles from '~/app/(main)/OrbitingCirclesView'
// import { ProjectCard } from '~/components/projects/ProjectCard'
// import { GithubProjectCard } from '~/components/projects/GithubProjectCard'
// import { CustomIcon } from '~/components/CustomIcon'
// import GitHubSnake from '~/components/home/GitHubSnake'
var title = '我的项目';
var description = '多年来，我一直在做各种各样的小项目，这里就是我筛选出来我觉得还不错的项目合集，也是我在技术领域中尝试和探索的最好见证。';
exports.metadata = {
    title: title,
    description: description,
    openGraph: {
        title: title,
        description: description
    },
    twitter: {
        title: title,
        description: description,
        card: 'summary_large_image'
    }
};
function ProjectsPage() {
    return (React.createElement(Container_1.Container, { className: "mt-16 sm:mt-24" },
        React.createElement("header", { className: "max-w-2xl" },
            React.createElement("h1", { className: "text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl" }, "Projects"),
            React.createElement("p", { className: "mt-6 text-base text-zinc-600 dark:text-zinc-400" },
                React.createElement("b", null, "Collections of my open-source side projects, along with some cool things I\u2019ve built with colleagues at work. It\u2019s a mix of passion projects and practical tools\u2014some just for fun, others to solve real-world problems."))),
        React.createElement("div", { className: "mt-8 sm:mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-[1200px] mx-auto" }, resume_1.DATA.projects.map(function (project, id) { return (React.createElement(blur_fade_1["default"], { key: project.title, delay: BLUR_FADE_DELAY * 12 + id * 0.05 },
            React.createElement(project_card_1.ProjectCard, { href: project.href, key: project.title, title: project.title, description: project.description, dates: project.dates, tags: project.technologies, image: project.image, video: project.video, links: project.links }))); }))));
}
exports["default"] = ProjectsPage;
exports.revalidate = 3600;
