import Product from "../models/product";
import productShema from "../Schemas/product";
import Category from "../models/category";

export const addProduct = async (req, res) => {
  try {
    const body= req.body;


    const { error } = productShema.validate(body, { abortEarly: false, });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const product = new Product(body);

    const updateCategories = await Category.updateMany({ _id: { $in: body.categoryId } }, { $push: { products: product._id } });

    if (!updateCategories) {
      return res.status(400).json({
        message: "Update categories thất bại",
      });
    }

    const newProduct = await product.save();
    if (!product) {
      return res.status(400).json({
        message: "thêm khoong thành công",
      });
    }

    return res.status(200).json({
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const getAllProducts = async (req, res) => {
  const {
    _sort = "createAt",
    _order = "asc",
    _limit = 10,
    _page = 1,
  } = req.query;
  const options = {
    page: _page,
    _limit: _limit,
    sort: {
      [_sort]: _order == "desc" ? -1 : 1,
    },
  };
  try {
    const {
      docs,
      totalDoc,
      totalPages
    } = await Product.paginate({}, {
      ...options,
      populate: [{
        path: "categoryId",
        select: "name",
      },],
    });
    if (docs.length === 0) {
      return res.status(404).json({
        message: "không có sản phẩm nào",
      });
    }
    return res.status(200).json({
      data: docs,
      totalDoc,
      totalPages,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const getOneProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        message: "sản phẩm không tồn tại",
      });
    }
    return res.status(200).json({
      data: product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const {
      error
    } = productShema.validate(body);
    if (error) {
      const errors = error.details.map((error) => error.message);
      return res.status(errors.length).json({
        message: errors,
      });
    }

    const product = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "sản phẩm không tồn tại",
      });
    }
    return res.status(200).json({
      message: "cập nhật sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const RemoveProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndDelete(id, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "sản phẩm không tồn tại",
      });
    }
    return res.status(200).json({
      message: "xóa sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};