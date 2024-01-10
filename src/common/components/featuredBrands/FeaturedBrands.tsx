import React from 'react'
import styles from "../featuredBrands/FeaturedBrands.module.scss";

import { IFeaturedBrands } from '../../../models/IFeaturedBrands';
export default function FeaturedBrands(props:IFeaturedBrands) {
    
    let productsListInString=""
    props.productsList.forEach((each,index)=>{
        productsListInString=productsListInString+each
        if(index!==props.productsList.length-1)
        productsListInString+=", "
    })
  return (
    <>
        <div className={styles.fetauredCard}>
            <div className={styles.brandImg}>
                <img src={props.brandImg} alt="brand"></img>
            </div>
            <div className={styles.descriptionCard}>
                <div className={styles.description}>
                    <div className={styles.brand}>{props.brandName}</div>
                    <div className={styles.products}>{productsListInString}</div>
                </div>
                {props.offer!==undefined && 
                  <div className={styles.offer}>
                    <span className={styles.offerText}>Upto</span>
                    <div>
                        <span className={styles.offerValue}>{props.offer}</span>  
                        <span className={styles.offerText}>%</span>
                        <span className={styles.offerText} id={styles.off}>off</span>
                    </div>
                  </div>}
            </div>
        </div>
    </>
  )
}
