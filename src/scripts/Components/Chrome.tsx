import * as React from "react";
import { Tab, Tabs, AddTab } from "./Tab";
import { AddressBar, Menu, ReloadButton, BackButton, ForwardButton, HomeButton } from "./Menu";
import { FavoriteBar } from "./Favorites";
const { useState } = React;

interface TabData {
  id: string;
  title: string;
  url: string;
}

interface ChromeState {
  tabs: TabData[];
  selectedTab: string;
}

function random() {
  return Math.random().toString(32).substring(2);
}

function useChrome() {
  const [state, setState] = useState<ChromeState>({
    tabs: [{ id: "initial", title: "blank", url: "" }],
    selectedTab: "initial",
  });
  return {
    tabs: state.tabs,
    currentTab: state.tabs.find(it => it.id === state.selectedTab),
    selectTab(selectedTab: string) {
      setState({ ...state, selectedTab });
    },
    addTab() {
      const id = random();
      setState({ ...state, tabs: [...state.tabs, { id, title: "blank", url: "" }], selectedTab: id });
    },
    setUrlToCurrentTab(url: string) {
      console.log(state.tabs[0].url, url);
      const i = state.tabs.findIndex(it => it.id === state.selectedTab);
      const tabs = state.tabs;
      tabs.splice(i, 1, { ...state.tabs[i], url });
      setState({ ...state, tabs: [...tabs] });
    },
    setTitleToCurrentTab(title: string) {
      const i = state.tabs.findIndex(it => it.id === state.selectedTab);
      const tabs = state.tabs;
      tabs.splice(i, 1, { ...state.tabs[i], title });
      setState({ ...state, tabs: [...tabs] });
    },
    closeTab(id: string) {
      console.log(id)
      const tabIndex = state.tabs.findIndex(it => it.id === id);
      const selectedTab = (id === state.selectedTab)
        ? tabIndex === 0
          ? state.tabs.length === 1
            ? "notab"
            : state.tabs[1].id
          : state.tabs[tabIndex - 1].id
        : state.selectedTab;
      setState({ ...state, tabs: state.tabs.filter(it => it.id !== id), selectedTab });
    }
  };
}

interface State {
  url: string;
  element?: HTMLIFrameElement;
}

const Home = "https://naoki-tomita.github.io/blog/dist/index.html"

export const Chrome: React.FC = () => {
  const { tabs, currentTab, selectTab, addTab, setUrlToCurrentTab, closeTab } = useChrome();
  const [state, setState] = useState<State>({ url: "" });
  function setUrl(url: string) {
    setState({ url });
    setUrlToCurrentTab(url);
  }

  return (
    <>
    <Tabs>
      {tabs.map(it =>
        <Tab
          onClose={() => (closeTab(it.id))}
          onClick={() => (selectTab(it.id), setState({ url: tabs.find(tab => tab.id === it.id).url }))}
          key={it.id}
          selected={it.id === currentTab.id}
        >{it.title}</Tab>)}
      <AddTab onClick={() => (addTab(), setState({ url: "" }))} />
    </Tabs>
    <Menu>
      <BackButton onClick={() => console.log("backward")} />
      <ForwardButton onClick={() => console.log("forward")} />
      <ReloadButton onClick={() => (setUrlToCurrentTab(""), setTimeout(() => setUrlToCurrentTab(state.url), 100)) } />
      <HomeButton onClick={() => setUrl(Home)} />
      <AddressBar
        value={state.url}
        onChange={e => setState({ ...state, url: e.target.value })}
        onKeyPress={({ key }) => (key === "Enter") && (setUrlToCurrentTab(state.url))} />
    </Menu>
    <FavoriteBar onClick={(url) => setUrl(url)}  />
    <iframe width="100%"
      ref={el => (el != null && state.element == null)
        && (fullHeight(el), setState({ ...state, element: el }))}
      style={{ border: "none", margin: 0, padding: 0, verticalAlign: "bottom" }}
      src={currentTab.url}
    />
    </>
  );
}

function fullHeight(el: HTMLElement) {
  el.style.height = `${window.innerHeight - el.offsetTop - 0}px`;
}
