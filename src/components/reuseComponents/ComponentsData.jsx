import React from "react";
import expenseTrackerImage from "../../assets/project-images/expense-tracker.png";
import restCountriesImage from "../../assets/project-images/rest-countries-api.png";
import ticTacToeImage from "../../assets/project-images/tic-tac-toe.png";
import todoListImage from "../../assets/project-images/to-do-list.png";
import paginationImage from "../../assets/project-images/pagination-function.png";
import multiStepFormImage from "../../assets/project-images/multi-step-form.png";
import infiniteScrollImage from "../../assets/project-images/infinite-scroll.png";
import reactQuizImage from "../../assets/project-images/react-quiz.png";
import timerSectionImage from "../../assets/project-images/timer-component.png";
import carouselComponentImage from "../../assets/project-images/carousel.png";
import toastNotificationImage from "../../assets/project-images/toast-notification.png";
import characterCounterImage from "../../assets/project-images/character-counter.png";
import autoCompleteSearchImage from "../../assets/project-images/auto-search.png";
import stockFreeImage from "../../assets/project-images/api-call.png";

const ComponentsData = [
    {
    componentId: 1,
    componentName: "REST Countries Explorer",
    builtWith: 'React application with REST API integration, dynamic routing, search functionality, and optimized loading states.',
    componentUrl: "/countries",
    componentImage: restCountriesImage,
    isFeatured: true,
    gitHubRepo: 'https://github.com/sumanth-git-hub/rest-countries-api-project'
  },
  {
    componentId: 2,
    componentName: "Expense Tracker (CRUD)",
    builtWith: 'Built with React, featuring add/delete expenses, category filtering, total calculation, and LocalStorage persistence.',
    componentUrl: "/expense-tracker",
    componentImage: expenseTrackerImage,
    isFeatured: true,
    gitHubRepo: 'https://github.com/sumanth-git-hub/expense-tracker'
  },
  {
    componentId: 3,
    componentName: "Tic Tac Toe",
    componentUrl: "/tic-tac-toe",
    componentImage: ticTacToeImage,
    isFeatured: false,
  },
  {
    componentId: 4,
    componentName: "Multi Step Form",
    builtWith: 'Built with React, featuring step validation, accordions, information modal and a Stepper component for progress tracking.',
    componentUrl: "/multi-step-form",
    componentImage: multiStepFormImage,
    isFeatured: true,
    gitHubRepo: 'https://github.com/sumanth-git-hub/multi-step-form/'
  },
  {
    componentId: 5,
    componentName: "Advanced Task Manager",
    builtWith: 'React task manager with full CRUD functionality, drag-and-drop reordering (dnd-kit), and localStorage persistence.',
    componentUrl: "/to-do-list",
    componentImage: todoListImage,
    isFeatured: true,
    gitHubRepo: 'https://github.com/sumanth-git-hub/web-development/tree/main/React.js/Projects/08-drag-and-drop-crud'
  },
  {
    componentId: 6,
    componentName: "Infinite Image Gallery",
    builtWith: 'Built with React, Infinite scroll image gallery with API integration, IntersectionObserver, responsive layout, and error handling.',
    componentUrl: "/infinite-scroll",
    componentImage: infiniteScrollImage,
    isFeatured: true,
    gitHubRepo: 'https://github.com/sumanth-git-hub/web-development/tree/main/React.js/Projects/20-infinite-scroll-in-react'
  },
  {
    componentId: 7,
    componentName: "Table with Pagination",
    builtWith: 'API-driven user data table client-side pagination, dynamic page controls, search filtering, and robust loading and error state handling.',
    componentUrl: "/pagination",
    componentImage: paginationImage,
    isFeatured: true,
    gitHubRepo: 'https://github.com/sumanth-git-hub/table-with-pagination'
  },
  {
    componentId: 8,
    componentName: "React Quiz",
    componentUrl: "/react-quiz",
    componentImage: reactQuizImage,
    isFeatured: false,
  },
  {
    componentId: 9,
    componentName: "Timer Component",
    componentUrl: "/timer-section",
    componentImage: timerSectionImage,
    isFeatured: false,
  },
  {
    componentId: 10,
    componentName: "Image Carousel",
    componentUrl: "/image-carousel",
    componentImage: carouselComponentImage,
    isFeatured: false,
  },
  {
    componentId: 11,
    componentName: "Toast Notification",
    componentUrl: "/toast-notifications",
    componentImage: toastNotificationImage,
    isFeatured: false,
  },
  {
    componentId: 12,
    componentName: "Charecter Counter",
    componentUrl: "/character-counter",
    componentImage: characterCounterImage,
    isFeatured: false,
  },
  {
    componentId: 13,
    componentName: "Auto Complete Search",
    componentUrl: "/auto-complete-search",
    componentImage: autoCompleteSearchImage,
    isFeatured: false,
  },
  {
    componentId: 14,
    componentName: "Stock Free Images",
    componentUrl: "/stock-free-images",
    componentImage: stockFreeImage,
    isFeatured: false,
  },
];
export default ComponentsData;
