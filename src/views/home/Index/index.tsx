import React, { useEffect } from 'react';
import { DispatchProp, connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getSystemInfo } from '@/store/actions';
import { StoreState } from '@/store';
import PenelGroup from './components/PenelGroup';
import SystemInfo from './components/SystemInfo';
import MoneyAccessChart from './components/MoneyAccessChart';

const mapStateToProps = ({ system }: StoreState) => ({ system });

type ThunkDispatchProps = ThunkDispatch<{}, {}, AnyAction>;
type Props = DispatchProp & ReturnType<typeof mapStateToProps> & { dispatch: ThunkDispatchProps };

const HomeIndex: React.FC<Props> = function ({ system, dispatch: propDispatch }) {

  useEffect(() => {
    propDispatch(getSystemInfo());
  }, [propDispatch]);

  return (
    <div className="home-index overflow-y_auto">
      <PenelGroup />
      <SystemInfo systemInfo={system.info} />
      <MoneyAccessChart />
    </div>
  )
};

export default connect(mapStateToProps)(HomeIndex);
