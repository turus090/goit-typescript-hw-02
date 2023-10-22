interface PageProps {
  title: string;
}

abstract class Component<T> {
  props: T;

  constructor(props: T) {
    this.props = props;
  }
}

class Page<T extends PageProps> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}
