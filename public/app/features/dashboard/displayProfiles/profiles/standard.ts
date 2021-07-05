import { DashboardDisplayProfile, DisplayProfileMode } from '../types';

export const standardProfile: DashboardDisplayProfile = {
  dashNav: {
    timePicker: DisplayProfileMode.default,
    title: DisplayProfileMode.default,
    tvToggle: DisplayProfileMode.default,
    addPanelToggle: DisplayProfileMode.default,
    dashboardSettingsToggle: DisplayProfileMode.default,
    saveDashboardToggle: DisplayProfileMode.default,
    snapshotToggle: DisplayProfileMode.default,
    starToggle: DisplayProfileMode.default,
    sharePanelToggle: DisplayProfileMode.default,
    customButtons: DisplayProfileMode.default,
  },
  subMenu: DisplayProfileMode.default,
  sideMenu: DisplayProfileMode.default,
};