let app = new Vue({
  el: "#app",
  data: {
    products: [],
    productTemp: {},
    submit: "",
  },
  created() {
    this.products = JSON.parse(localStorage.getItem("products")) || [];
  },
  methods: {
    addProduct() {
      let vm = this.productTemp;
      if (
        !vm.imgUrl ||
        !vm.title ||
        !vm.category ||
        !vm.unit ||
        !vm.originalPrice ||
        !vm.salePrice ||
        !vm.description ||
        !vm.content
      ) {
        alert("資料輸入不完整，請再確認");
        return;
      } else {
        // 抓取id值
        const id = Date.now();
        vm.id = id;
        this.products.push(vm);
        localStorage.setItem("products", JSON.stringify(this.products));
        this.productTemp = {};
        // 關閉modal
        $("#productModal").modal("hide");
      }
    },
    delProduct() {
      this.products.forEach((item, i) => {
        if (this.productTemp.id === item.id) {
          this.products.splice(i, 1);
        }
      });
      localStorage.setItem("products", JSON.stringify(this.products));
      this.productTemp = {};
      $("#delProductModal").modal("hide");
    },
    editProduct() {
      this.products.forEach((item, i) => {
        if (this.productTemp.id === item.id) {
          this.products[i] = this.productTemp;
        }
      });
      localStorage.setItem("products", JSON.stringify(this.products));
      this.productTemp = {};
      $("#productModal").modal("hide");
    },
    getProductTemp(item) {
      this.productTemp = item;
    },
    cancel() {
      this.productTemp = {}
    }
  },
});