'use strict';

export const domReady = (callBack: () => void) => {
	if (document.readyState === "loading") {
		document.addEventListener('DOMContentLoaded', callBack);
	}
	else {
		callBack();
	}
}

export const windowReady = (callBack: () => void) => {
	if (document.readyState === 'complete') {
		callBack();
	}
	else {
		window.addEventListener('load', callBack);
	}
}

export const html = (contents: string | Element): HTMLElement => {
	return (contents as unknown) as HTMLElement; // 😱
}

export function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}