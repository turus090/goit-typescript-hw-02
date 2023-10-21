/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Page<T extends PageProps> extends Component<T> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад використання
const pageData: PageProps = {
  title: "Моя сторінка",
  // Додайте інші властивості, якщо є
};

const page = new Page(pageData);
page.pageInfo();
