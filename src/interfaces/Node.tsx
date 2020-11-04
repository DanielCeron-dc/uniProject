interface node {
  element: string;
  parent: string | null;
  sons: node[];
}

export default node;
