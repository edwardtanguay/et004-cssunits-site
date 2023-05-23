import './style.scss';
import skills from './data/skills.json';
import dayjs from 'dayjs';

const _startDay = dayjs('2023-05-23');
const _newDay = _startDay.add(21, 'day');

const title = 'Cascading Style Sheets';

const getModuleSkills = () => {
	// return curriculum.modules[1].submodules[2].title;
	let r = '';

	r += '<ul>';
	for (const skill of skills) {
		r += `<li>${skill.name}</li>`;
	}
	r += '</ul>';

	return r;
};

document.querySelector('#app').innerHTML = `
<h1>${title}</h1>
<div class="modules">
	<h2>day.js demo</h2>
	<ul>
		<li>${_startDay.format('YYYY-MM-DD')}</li>
		<li>${_newDay.format('YYYY-MM-DD')}</li>
	</ul>
	<h2>Web developer skills (from JSON file)</h2>
	${getModuleSkills()}
</div>
	<div class="content">
		<article>
			<h2>Syntax</h2>
			<p>CSS has a simple syntax and uses a number of English keywords to specify the names of various style
				properties.</p>
			<p>A style sheet consists of a list of rules. Each rule or rule-set consists of one or more selectors, and a
				declaration block. </p>
		</article>
		<article>
			<h2>Declaration block</h2>
			<p>A declaration block consists of a list of declarations in braces. Each declaration itself consists of a
				property, a colon (:), and a value. If there are multiple declarations in a block, a semi-colon (;) must
				be inserted to separate each declaration. An optional semi-colon after the last (or single) declaration
				may be used. Optional white-space may be around the declaration block, declarations, colons, and
				semi-colons for readability.</p>
			<p>Properties are specified in the CSS standard. Each property has a set of possible values. Some properties
				can affect any type of element, and others apply only to particular groups of elements.</p>
		</article>
		<article>
			<h2>Specificity</h2>
			<p>Specificity refers to the relative weights of various rules. It determines which styles apply to an
				element when more than one rule could apply. Based on the specification, a simple selector (e.g. H1) has
				a specificity of 1, class selectors have a specificity of 1,0, and ID selectors have a specificity of
				1,0,0.</p>
			<p>Because the specificity values do not carry over as in the decimal system, commas are used to separate
				the "digits" (a CSS rule having 11 elements and 11 classes would have a specificity of 11,11, not 121).
				In the above example, the declaration in the style attribute overrides the one in the style element
				because it has a higher specificity, and thus, the paragraph appears green.</p>
		</article>
	</div>	
`;
