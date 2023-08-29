import React from "react";
import {Table } from 'antd';
import { useGetCategoryQuery } from "../../../api/category";

const ManegerCategory = () => {
  const {data: categories} = useGetCategoryQuery()
  const dataSource = categories?.category?.map(ctg =>{
    console.log(ctg)
     return ctg
  })

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'desc',
      key: 'desc',
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default ManegerCategory;
