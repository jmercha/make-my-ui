import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "../button";
import { IoIosAdd, IoIosBasket } from "react-icons/io";

const stories = storiesOf("UI Components/Button/Basic", module);

stories.add("Default Primary", () => (
  <Button text="button" shape="basic" onClick={action("button-click")} />
));

stories.add("Fluid Primary", () => (
  <Button text="button" shape="basic" onClick={action("button-click")} fluid />
));

stories.add("Disabled Primary", () => (
  <Button
    text="button"
    shape="basic"
    onClick={action("button-click")}
    state="disabled"
  />
));

stories.add("Loading Primary", () => (
  <Button
    text="button"
    shape="basic"
    onClick={action("button-click")}
    state="loading"
  />
));

stories.add("Plus Icon Primary", () => (
  <Button
    icon={IoIosAdd}
    text="button"
    shape="basic"
    onClick={action("button-click")}
  />
));

stories.add("Fluid Basket Icon Primary", () => (
  <Button
    icon={IoIosBasket}
    text="button"
    shape="basic"
    onClick={action("button-click")}
    fluid
  />
));

stories.add("Fluid Loading Primary", () => (
  <Button
    text="button"
    onClick={action("button-click")}
    shape="basic"
    state="loading"
    fluid
  />
));

stories.add("Default Secondary", () => (
  <Button
    text="button"
    shape="basic"
    onClick={action("button-click")}
    emphasis="secondary"
  />
));

stories.add("Fluid Secondary", () => (
  <Button
    text="button"
    shape="basic"
    onClick={action("button-click")}
    emphasis="secondary"
    fluid
  />
));

stories.add("Disabled Secondary", () => (
  <Button
    text="button"
    shape="basic"
    onClick={action("button-click")}
    emphasis="secondary"
    state="disabled"
  />
));

stories.add("Loading Secondary", () => (
  <Button
    text="button"
    shape="basic"
    onClick={action("button-click")}
    emphasis="secondary"
    state="loading"
  />
));
