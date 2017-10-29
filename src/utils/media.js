import { css } from 'styled-components';

const sizes = {
  desktop: [961, 9999],
  tablet: [526, 960],
  mobile: [0, 525]
}

export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label][1] / 16}em) and (min-width: ${sizes[label][0] / 16}em) {
			${css(...args)}
		}
	`
	return acc;
}, {});
