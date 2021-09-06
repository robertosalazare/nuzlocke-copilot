import { Team } from '../team';
import { Trainers } from '../trainers';
import './style.scss';

export const Root = () => (
  <div className="content">
    <div className="page">
      <div className="team">
        <Team />
      </div>
      <div className="trainers">
        <Trainers />
      </div>
    </div>
  </div>
);