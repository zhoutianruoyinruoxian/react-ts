import React from 'react';
import { Gantt } from '@'
import Calendar from 'src/components/Gantt/gantt/date';
import moment from 'moment';

export default class GanttTest extends React.Component {

  componentDidMount() {
    console.log(new Calendar())
  }
  render() {
    const option = [{
      start: moment().valueOf(),
      end: moment().add(1, 'day').valueOf(),
    }]
    return (
      <Gantt
        option={{
          dataSource:option
        }
        }
      // taskListData={taskListData}
      // filterType={this.state.filterType}
      // taskPageType={taskPageType}
      // selectedTaskId={this.state.taskId}
      // operateDetailPanel={this.operateDetailPanel.bind(this)}
      // refreshTaskDetail={this.refreshTaskDetail}
      />
    )
  }
}