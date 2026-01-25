// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "Docs" | "Tools" | "Fonts" | "Other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "Child-Fun-Sans",
		title: "「游趣体」字体设计项目",
		description:
			"An open-source Chinese font derived from Fontworks' Stick.",
		image: "",
		category: "Fonts",
		techStack: ["Python", "Batch"],
		status: "in-progress",
		sourceCode: "https://github.com/Des-Magmeta/ChildFunSans", // 更改为GitHub链接
		visitUrl: "https://www.maoken.com/22430.html", // 添加前往项目链接
		startDate: "2024-07-28",
		endDate: "2026-06-01",
		featured: true,
		tags: ["SIL OFL 1.1", "CJK", "Fonts", "Child Fun Sans", "Open Source"],
	},
	
	{
		id: "PlanKai",
		title: "「计划楷」扩展字体项目",
		description:
			"An open-source font for Unified Ideographic Extension derived from Fontworks' Klee One.",
		image: "",
		category: "Fonts",
		techStack: ["Python", "Batch"],
		status: "completed",
		sourceCode: "https://github.com/Des-Magmeta/PlanKai", // 更改为GitHub链接
		visitUrl: "https://github.com/Des-Magmeta/PlanKai", // 添加前往项目链接
		startDate: "2022-07-28",
		endDate: "2025-12-31",
		featured: true,
		tags: ["SIL OFL 1.1", "CJK", "Fonts", "Plan Kai", "Open Source"],
	},

	{
		id: "Gathering-Script",
		title: "「源聚楷」中日韩字形整合项目",
		description:
			"An open source CJK font derived from Fontworks' Klee One.",
		image: "",
		category: "Fonts",
		techStack: ["Python", "Batch"],
		status: "planned",
		sourceCode: "https://github.com/Des-Magmeta/Gathering-Script", // 更改为GitHub链接
		visitUrl: "https://github.com/Des-Magmeta/Gathering-Script", // 添加前往项目链接
		startDate: "2026-06-01",
		endDate: "2030-12-31",
		featured: true,
		tags: ["SIL OFL 1.1", "CJK", "Fonts", "Klee", "Open Source"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
