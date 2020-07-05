let app = new Vue({
  el: "#app",
  data: {
    products: [{
        id: 1593937170381,
        imgUrl: "https://f.ecimg.tw/items/DYAJCH1900AN913/000001_1593773197.jpg",
        title: "airpods pro",
        category: "藍芽耳機",
        unit: "個",
        originalPrice: 7990,
        salePrice: 7890,
        description: "頻果公司目前最強大的降噪真無線藍芽耳機",
        content: "頻果公司目前最強大的降噪真無線藍芽耳機",
        isEnabled: false,
      },
      {
        id: 1593937294393,
        imgUrl: "https://b.ecimg.tw/items/DYAJCX1900AONMZ/000001_1593745506.jpg",
        title: "iphone SE 64G",
        category: "智慧型手機",
        unit: "支",
        originalPrice: 14500,
        salePrice: 14000,
        description: "iphone",
        content: "iphone",
        isEnabled: true,
      },
    ],
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