let app = new Vue({
  el: "#app",
  data: {
    products: [{
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
      {
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
        id: 1593961634360,
        imgUrl: "https://e.ecimg.tw/items/DYAJC41900AOT99/000001_1590748443.jpg",
        title: "Apple Watch S5",
        category: "智慧型手錶",
        unit: "支",
        originalPrice: 13400,
        salePrice: 12900,
        description: "世界第一的智慧型手錶",
        content: "世界第一的智慧型手錶",
        isEnabled: true,
      },
      {
        id: 1593961711298,
        imgUrl: "https://b.ecimg.tw/items/DYAJH0A900AKSL8/000001_1586490952.jpg",
        title: "2020 iPad Pro 12.9吋 128G",
        category: "平板電腦",
        unit: "個",
        originalPrice: 32900,
        salePrice: 31900,
        description: "你的下一部電腦，非電腦。",
        content: "你的下一部電腦，非電腦。",
        isEnabled: true,
      },
      {
        id: 1593962160130,
        imgUrl: "https://e.ecimg.tw/items/DYAJCSA900AN347/000001_1593767660.jpg",
        title: "MacBook Pro13 灰色 256GB",
        category: "筆記型電腦",
        unit: "台",
        originalPrice: 41900,
        salePrice: 38900,
        description: "筆記型電腦",
        content: "筆記型電腦",
        isEnabled: false,
      },
    ],
    productTemp: {},
    submit: "",
    sort: "",
    price: false,
  },
  methods: {
    // 新增產品
    addProduct() {
      const vm = this.productTemp;
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
      }
      if (vm.originalPrice < 0 || vm.salePrice < 0) {
        alert('商品價格不能小於0');
        return;
      }
      // 抓取id值
      const id = Date.now();
      vm.id = id;
      this.products.push(vm);
      this.productTemp = {};
      // 關閉modal
      $("#productModal").modal("hide");
    },
    // 刪除產品
    delProduct() {
      this.products.forEach((item, i) => {
        if (this.productTemp.id === item.id) {
          this.products.splice(i, 1);
        }
      });
      this.productTemp = {};
      $("#delProductModal").modal("hide");
    },
    // 編輯產品內容
    editProduct() {
      this.products.forEach((item, i) => {
        if (this.productTemp.id === item.id) {
          this.products[i] = this.productTemp;
        }
      });
      this.productTemp = {};
      $("#productModal").modal("hide");
    },
    // 取得產品資料到productTemp
    getProductTemp(item) {
      this.productTemp = {
        ...item
      };
    },
    // 取消編輯和刪除
    cancel() {
      this.productTemp = {}
    },
    // 對originPrice和salePrice 進行排序
    sortPrice() {
      this.products.sort((a, b) => {
        switch (this.sort) {
          case 'oriPrice':
            if (this.price) {
              return a.originalPrice - b.originalPrice
            } else {
              return b.originalPrice - a.originalPrice
            }
            break;
          case 'salePrice':
            if (this.price) {
              return a.salePrice - b.salePrice
            } else {
              return b.salePrice - a.salePrice
            }
            break;
        }
      })
    }
  },
});