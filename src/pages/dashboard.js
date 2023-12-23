import { Blubs } from "../components/";
const Widgets = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
export default function Dashboard() {
  return (
    <div>
      <div>
        <Widgets title="Events and Alarms" />
        <Widgets title="storage" />
      </div>
      <Blubs />
    </div>
  );
}
