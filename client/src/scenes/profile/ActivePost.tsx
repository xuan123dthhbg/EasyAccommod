import { Card, List, Row, Image, Modal, Table, Tag } from "antd";
import React from "react";
import Chart from "../../components/chart/Chart";
import {
  DeleteOutlined,
  EyeTwoTone,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

export const ActivePost: React.FC = () => {
  const dataView = [21, 22, 10, 28, 16, 21, 13, 33, 55, 35];
  const dataLike = [100, 50, 20, 70, 45, 67, 85, 53, 65, 53];
  const dataTitle = [
    "Phòng trọ giá rẻ",
    "Phòng cho nữ",
    "Phòng trọ giá rẻ",
    "Phòng cho nữ",
    "Phòng trọ giá rẻ",
    "Phòng cho nữ",
    "Phòng trọ giá rẻ",
    "Phòng cho nữ",
    "Phòng trọ giá rẻ",
    "Phòng cho nữ",
  ];
  const dataPostIndex = [
    'Bài viết số 1',
    'Bài viết số 2',
    'Bài viết số 3',
    'Bài viết số 4',
    'Bài viết số 5',
    'Bài viết số 6',
    'Bài viết số 7',
    'Bài viết số 8',
    'Bài viết số 9',
    'Bài viết số 10',
  ]
  const chartHeight = 400;
  const chartWidth = 750;
  const listData = [];
  const columns = [
    {
      title: 'Tiêu đề bài viết',
      dataIndex: 'name',
      key: 'name',
    },
    {
        title: 'Lượt xem',
        dataIndex: 'view',
        key: 'view',
      },
      {
        title: 'Lượt thích',
        dataIndex: 'like',
        key: 'like',
      },
    {
      title: 'Ngày tạo bài',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tình trạng',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags:any) => (
        <>
          {tags.map((tag:any) => {
            let color = 'geekblue';
            if (tag === 'Hết hạn') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
        title: "Thao tác",
        key: "action",
        render: (text: any, record: any) => (
          <>
            <a href=""> <EyeTwoTone /></a>
            <DeleteOutlined
              style={{ marginLeft: 30, color: "red" }}
              onClick={confirmDelete}
            />
          </>
        ),
      }
  ];
  const data = [
    {
      key: '1',
      name: 'Phòng trọ giá dân',
      date: "10/10/2020",
      address: 'Xuân Đỉnh, Cầu Giấy',
      tags: ['Chưa hết hạn'],
      view: '100',
      like: '50'
    },
    {
      key: '2',
      name: 'Phòng trọ giá dân',
      date: "10/10/2020",
      address: 'Xuân Đỉnh, Cầu Giấy',
      tags: ['Hết hạn'],
      view: '100',
      like: '50'
    },
    {
      key: '3',
      name: 'Phòng trọ giá dân',
      date: "10/10/2020",
      address: 'Xuân Đỉnh, Cầu Giấy',
      tags: ['Chưa hết hạn'],
      view: '100',
      like: '50'
    },
    {
        key: '4',
        name: 'Phòng trọ giá dân',
        date: "10/10/2020",
        address: 'Xuân Đỉnh, Cầu Giấy',
        tags: ['Chưa hết hạn'],
        view: '100',
        like: '50'
      },
      {
        key: '5',
        name: 'Phòng trọ giá dân',
        date: "10/10/2020",
        address: 'Xuân Đỉnh, Cầu Giấy',
        tags: ['Hết hạn'],
        view: '100',
        like: '50'
      },
  ];
  for (let i = 0; i < 10; i++) {
    listData.push({
      href: "",
      title: dataPostIndex[i],
      content:dataTitle[i]
    });
  }
  function confirmDelete() {
    Modal.confirm({
      title: "Xóa bài viết",
      icon: <ExclamationCircleOutlined />,
      content: "Bạn sẽ xóa bài viết?",
      okText: "OK",
      cancelText: "Không",
      onOk: () => {},
    });
  }
  return (
    <div className="active-post">
      <Row justify="space-around" style={{ margin: 20 }}>
        <Card className="like-view-chart text-center">
          <div className="chart-title">
            10 bài viết có lượng like và view cao nhất
          </div>
          <br />
          <Row justify="center">
            {Chart(dataLike, dataView, chartHeight, chartWidth)}
          </Row>
        </Card>
        <Card className="like-new-post">
          <div className="chart-title">Nội dung</div>,
          <List
            size="large"
            pagination={{
              pageSize: 3,
              total: 10,
            }}
            dataSource={listData}
            renderItem={(item) => (
              <List.Item key={item.title} className="item-title">
                <List.Item.Meta title={<a href={item.href}>{item.title}</a>} description={item.content}/>
                <Image
                  className="item-image"
                  src="https://pbs.twimg.com/media/EiHnf16XYAIR-7D.jpg"
                ></Image>
              </List.Item>
            )}
          />
          ,
        </Card>
      </Row>
      <br/>
      <div className="active-post">
        <Table columns={columns} dataSource={data} pagination={{pageSize: 3}}></Table>
      </div>
    </div>
  );
};