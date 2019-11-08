import React from 'react';
import PropTypes from 'prop-types';
import {
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import Description from '../../pages/management/Ecommerce';
import Files from '../../pages/management/Files';
import Economics from '../../pages/management/Economics';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Info from '../../pages/management/Info';
import Ecommerce from '../../pages/management/Ecommerce';



class order extends React.Component {
    static propTypes = {
        order: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    };

    static defaultProps = {
        order: []
    };

 /*   componentDidMount() {
        window.scrollTo(0,0);
        this.props.dispatch(getProductsRequest());
    } */

    findProduct(id) {
        const {order} = this.props;
        return order.find(p => p.id === id);
    }

    getId() {
        const {match} = this.props;
        return parseInt(match.params.id);
    }

    render () {
        let order = {
            "IDSku": 1,
            "SkuName": "Cerveja alemã Erdinger Weissbier Lata 500ml",
            "SkuCest": "0302100",
            "SkuCst": 2,
            "SkuHeight": 33,
            "SkuLength": 12,
            "SkuWidth": 12,
            "SkuWeight": 0.5,
            "SkuNCM": "22030000",
            "BarCode": "4002103292876",
            "CostAverage": 7.5655,
            "CostLastPurchase": 7.5001,
            "EcommerceDescription": "A Erdinger Weissbier é uma das cervejas de trigo mais vendidas e consumidas no mundo! Com um sabor inesquecível, tem cor dourada, com espuma cremosa e persistente, notas de cravo e banana e um sutil toque de amargor. rSegue a Lei da Pureza alemã de 1516 e é uma cerveja leve, refrescante e muito fácil de beber!rÉ um ícone dentre as clássicas cervejas de trigo alemãs.",
            "EcommerceDescriptionShort": "A Erdinger Weissbier é uma das cervejas de trigo mais vendidas e consumidas no mundo! Com um sabor inesquecível, tem cor dourada, com espuma cremosa e persistente, notas de cravo e banana e um sutil toque de amargor. rSegue a Lei da Pureza alemã de 1516 e é uma cerveja leve, refrescante e muito fácil de beber!",
            "EcommerceIsActive": "true",
            "EcommerceIsVisible": "true",
            "EcommerceKeyWords": "........................................................................................................",
            "EcommerceLinkId": "Cerveja-alema-Erdinger-Weissbier-Lata-500ml",
            "EcommerceMetaTagDescription": "A Erdinger Weissbier é uma das cervejas de trigo mais vendidas e consumidas no mundo! Com um sabor inesquecível, tem cor dourada, com espuma cremosa e persistente, notas de cravo e banana e um sutil toque de amargor. rSegue a Lei da Pureza alemã de 1516 e é uma cerveja leve, refrescante e muito fácil de beber!",
            "EcommerceShowWithoutStock": "true",
            "EcommerceTitle": "Cerveja alemã Erdinger Weissbier Lata 500ml",
            "TaxDepartmentDescription": "Cerveja",
            "NfOrigDescription": "Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7",
            "Pricing": [
            {
            "DateTo": "1900-01-01",
            "DateFrom": "1900-01-01",
            "PriceList": 0,
            "PriceSell": 0
            },
            {
            "DateTo": "4000-01-01",
            "DateFrom": "1900-01-01",
            "PriceList": 19.99,
            "PriceSell": 18.99
            },
            {
            "DateTo": "2019-07-30",
            "DateFrom": "2019-07-01",
            "PriceList": 19.99,
            "PriceSell": 14.99
            }
            ],
            "Images": [
            {
            "Url": "https://s3.amazonaws.com/rockitsystem/Image/1.jpg",
            "IsMain": "true"
            }
            ],
            "Suppliers": [
            {
            "SupplierCode": "EW011",
            "QuantityMultiply": 24,
            "SupplierNameCorporateName": "Bier Wein Distribuidora Ltda"
      }
    ]
  };

        return (
            <div className="product-details">
                <h1 className="page-title">Detalhe Do Produto <span className="fw-semi-bold">{order.Order}</span></h1>
                {
                    order && (
                        <div>

                        <Tabs>
                            <TabList>
                             <Tab>Ecommerce</Tab>
                             <Tab>Medidas</Tab>
                             <Tab>Fornecedores</Tab>
                             <Tab>Compras</Tab>
                             <Tab>Vendas</Tab>
                             <Tab>Lote</Tab>
                             <Tab>Kit</Tab>
                             <Tab>Log</Tab>
                             <Tab>Imagem</Tab>
                             <Tab>Reservado</Tab>
                             <Tab>Promo</Tab>
                             <Tab>Categoria Simples</Tab>
                             <Tab>Ecommerce</Tab>
                             <Tab>Mostrar</Tab>
                             <Tab>Marketplace</Tab>
                             <Tab>Variações</Tab>
                           </TabList>
        
                          <TabPanel>
                            <h2><Ecommerce data={order}/></h2>
                         </TabPanel>
                         
                         <TabPanel>
                            <h2><Files data={order}/></h2>
                         </TabPanel>
                         <TabPanel>
                            <h2><Info data={order}/></h2>
                         </TabPanel>
                         <TabPanel>
                            <h2><Economics data={order}/></h2>
                         </TabPanel>
                      </Tabs>

                </div>
                    )
                }
            </div>
        )
    }
}

export default withRouter((order))