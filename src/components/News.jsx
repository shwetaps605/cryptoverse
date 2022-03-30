import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'

import { useGetCryptoNewsQuery } from '../services/newsApi'
import { useGetCryptosQuery } from '../services/cryptoApi'
const { Text, Title } = Typography
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';


const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 })
    const news = cryptoNews?.value
    const { data: cryptocurrencies } = useGetCryptosQuery(100)

    if (!news) return 'Loading...'


    return (
        <Row gutter={[24, 24]}>
            {
                !simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className='select-name'
                            placeholder='Select a crypto'
                            optionFilterProp='children'
                            onChange={value => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Option value='Cryptocurrency'>Cryptocurrency</Option>
                            {
                                cryptocurrencies?.data?.coins.map(coin => <Option value={coin.name}>
                                    {coin.name}
                                </Option>)
                            }

                        </Select>
                    </Col>
                )
            }
            {
                news.map((newsItem, index) => (
                    <Col xs={24} sm={12} lg={8} key={index}>
                        <Card hoverable className='news-card'>
                            <a href={newsItem.url} target='_blank' rel='noreferrer'>
                                <div className="news-image-container">
                                    <Title className='news-title' level={4}>
                                        {newsItem.name}
                                    </Title>
                                    <img src={newsItem?.image?.thumbnail?.contentUrl || demoImage} alt='' />
                                </div>
                                <p>
                                    {newsItem.description.length > 100 ? `${newsItem.description.substring(0, 100)}...` : newsItem.description}
                                </p>
                                <div className='provider-container'>
                                    <div>
                                        <Avatar src={newsItem?.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='' />
                                        <Text className='provider-name'>{newsItem.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(newsItem.datePublished).startOf('ss').fromNow()}</Text>


                                </div>
                            </a>

                        </Card>
                    </Col>
                ))
            }
        </Row>
    )
}

export default News