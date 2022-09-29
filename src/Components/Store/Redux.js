import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: "p1",
      name: "Project 1",
      task: [
        {
          id: "t1a",
          name: "Task 1a",
          status: "active",
          description: "Task 1a description",
          children: [
            {
              id: "sub1-a-a",
              name: "Task 1a:1",
              description: "Task 1a:1 description",
              status: "active",
            },
          ],
        },
        {
          id: "t1b",
          name: "Task 1b",
          status: "active",
          description: "Task 1b description",
          children: [
            {
              id: "sub1-b-a",
              name: "Task 1b:1",
              description: "Task 1b:1 description",
              status: "active",
            },
          ],
        },
      ],
    },
    {
      id: "p2",
      name: "Project 2",
      task: [
        {
          id: "t2a",
          name: "Task 2",
          status: "active",
          description: "Task 2a:1 description",
          children: [
            {
              id: "sub2a",
              name: "Task 2a:1",
              description: "Task 2a:1 description",
              status: "active",
            },
            {
              id: "sub2b",
              name: "Task 2b:1",
              description: "Task 2b:1 description",
              status: "active",
            },
            {
              id: "sub2c",
              name: "Task 2c:1",
              description: "Task 2c:1 description",
              status: "active",
            },
          ],
        },
      ],
    },
  ],
  openedProject: [],
  openProject: false,
  openedTask: [],
  openTask: false,
};
const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    openProject(state, action) {
      const currState = [...state.projects];
      state.openedProject = currState.filter((item) => {
        return item.id === action.payload;
      });
      state.openedProject = state.openedProject.map((item) => {
        return item.task;
      });
      state.openProject = !state.openProject;
    },
    openTask(state, action) {
      const currState = state.openedProject;
      state.openedTask = currState.filter((item) => {
        return item;
      });
      state.openedTask = state.openedTask[0].filter((item) => {
        return item.id === action.payload;
      });

      state.openTask = !state.openTask;
    },
    openSubTask(state, action) {},
    deleteProject(state, action) {},
    deleteTask(state, action) {},
    deleteSubTask(state, action) {},
  },
});

const store = configureStore({
  reducer: dataSlice.reducer,
});
export const dataAction = dataSlice.actions;
export default store;
