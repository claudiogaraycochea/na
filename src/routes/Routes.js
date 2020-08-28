/* Pages */
//import Error404 from '../pages/error404/Error404';
import Home from '../pages/home/Home';
import Course from '../pages/course/Course';
// import StyleGuide from '../ui/styleGuide/StyleGuide';

/* Layouts */
// import DashboardLayout from '../layouts/dashboard/DashboardLayoutContainer';
import FullLayout from '../layouts/fullLayout/FullLayout';

export const routes = [
/*  {
    id: 4,
    exact: true,
    path: '/styleGuide',
    Component: StyleGuide,
    Layout: DashboardLayout,
    Access: 'Public',
  },*/
  {
    id: 3,
    exact: true,
    path: '/course',
    Component: Course,
    Layout: FullLayout,
    Access: 'Public',
  },
  {
    id: 1,
    exact: true,
    path: '/',
    Component: Home,
    Layout: FullLayout,
    Access: 'Public',
  }
/* , {
    id: 0,
    exact: true,
    path: '*',
    Component: Error404,
    Layout: DashboardLayout,
    Access: 'Public',
  },*/
];