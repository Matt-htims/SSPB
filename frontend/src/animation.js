export const lineAnimation = {
	hidden: { width: '0%' },
	show: {
		width: '100%',
		transition: { duration: 1 },
	},
};

export const fadeIn = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
		},
	},
};

export const popup = {
	hidden: {
		opacity: 0,
		scale: 0.5,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.75,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.75,
		},
	},
};

export const pageAnimation = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,

		transition: {
			duration: 0.15,
			when: 'beforeChildren',
			staggerChildren: 0.4,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const slideIn = {
	hidden: {
		y: -300,
	},
	show: {
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		y: 300,
		transition: {
			duration: 0.5,
		},
	},
};

export const fade = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { ease: 'easeOut', duration: 1 },
	},
};

export const titleAnimation = {
	hidden: { y: 200 },
	show: {
		y: 0,
		transition: { duration: 0.75, ease: 'easeOut' },
	},
};

export const photoAnimation = {
	hidden: { scale: 1.5, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			ease: 'easeOut',
			duration: 0.75,
		},
	},
};

export const scrollReveal = {
	hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
};
