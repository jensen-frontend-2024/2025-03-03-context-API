import { GrandChildComponent2 } from './GrandChildComponent2';

export function ChildComponent2() {
  // This component accepts count as a prop but its only purpose is to pass it on to its child component. It's not actually using it in its code or in its own JSX. This is an example of props drilling. The prop is just 'passing through'. EDIT: This is obsolete when using context
  return (
    <section className="child-component2">
      Child Component 2
      <GrandChildComponent2 />
    </section>
  );
}
