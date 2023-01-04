import React from 'react';
import {Table} from "antd";
import '../../style/style-table.css';
import {useDispatch, useSelector} from "react-redux";
import {updateSelectedRow} from "../../redux/action/action";

function DeliveryTable() {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.main.data)
    const selectedRow = useSelector((state) => state.main.selectedRow)
    const loading = useSelector((state) => state.main.loading)

    const columns = [
        {
            title: 'Номер заявки',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Координаты ОТ lat',
            dataIndex: 'fromLat',
            key: 'fromLat',
        },
        {
            title: 'Координаты ОТ lng',
            dataIndex: 'fromLng',
            key: 'fromLng',
        },
        {
            title: 'Координаты ДО lat',
            key: 'beforeLat',
            dataIndex: 'beforeLat',
        },
        {
            title: 'Координаты ДО lng',
            key: 'beforeLng',
            dataIndex: 'beforeLng',
        },
    ];
    
    const changeSelector = (srk) => {
        const row = data.find(r => r.key === srk[0]);
        dispatch(updateSelectedRow(row))
    }

    const rowSelection = {
        selectedRowKeys: [selectedRow?.key],
        onChange: changeSelector,
        type: 'radio'
    };

    return (
        <div className='table-container'>
            <Table
                loading={loading}
                rowSelection={rowSelection}
                columns={columns}
                dataSource={data}
                pagination={false}/>
        </div>
    );
}

export default DeliveryTable;
