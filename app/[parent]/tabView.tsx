import styles from './tabview.module.css';

function handleTabClick() {
	console.log('Tab clicked');
}

export default function TabView() {
	return (
		<>
			<div className={styles.tabContainer}>
				<button onClick={handleTabClick()}>Tab One</button>
				<button>Tab Two</button>
			</div>
		</>
	);
}
