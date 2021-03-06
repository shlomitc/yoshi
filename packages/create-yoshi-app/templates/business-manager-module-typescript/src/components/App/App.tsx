import * as React from 'react';
import * as PropTypes from 'prop-types';
import { translate, InjectedTranslateProps } from 'react-i18next';
import * as s from './App.scss';

interface IAppProps extends InjectedTranslateProps {}

class App extends React.Component<IAppProps> {
  static propTypes = {
    t: PropTypes.func,
  };

  render() {
    const { t } = this.props;
    return (
      <div className={s.root}>
        <div className={s.header}>
          <h2 data-hook="app-title">{t('app.title')}</h2>
        </div>
        <p className={s.intro}>{t('app.intro')}</p>
      </div>
    );
  }
}

export default translate(null, { wait: true })(App);
