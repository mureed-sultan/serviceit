import React, { useState, useEffect } from 'react'
import Layout from '@/component/Layout'
import Image from 'next/image'
import client from '../../sanityConfig'
import Link from 'next/link'

interface category {
    _id: string,
    imageUrl: string,
    title: string
}
function Categories() {

    const [categories, setCategories] = useState<category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await client.fetch(`
          *[_type == "category"]{
            ...,
            "imageUrl": image.asset->url,
            }
          `);
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);
    // console.log(categories)
    return (
        <Layout>
            <div className="bg-img">
                <Image width={150} height={150} src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg1" />
                <Image width={150} height={150} src="/assets/img/bg/work-bg-03.png" alt="img" className="bgimg2" />
            </div>

            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <h2 className="breadcrumb-title">Categories</h2>
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Categories</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container">
                    <div className="row">
                        {categories.map(category => (
                            <div key={category._id} className="col-md-6 col-lg-4 d-flex">
                                <Link href={`/service/${category._id}`} className="category-card flex-fill">
                                    <div className="category-img">
                                        <a>
                                            <Image
                                                width={100}
                                                height={100}
                                                src={category.imageUrl}
                                                className="img-fluid"
                                                alt={category.title}
                                            />
                                        </a>
                                    </div>
                                    <div className="category-info">
                                        <div className="category-name">
                                            <span className="category-icon">
                                                {/* Assuming you have SVG icons, update the src attribute */}
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    src="/assets/img/icons/category-01.svg"
                                                    alt="Service"
                                                />
                                            </span>
                                            <h6><a>{category.title}</a></h6>
                                        </div>
                                        <p>22 Services</p> {/* Replace with actual number of services */}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Categories

