import React from 'react'
    import { Image, Text, View, Page, Document, StyleSheet } from '@react-pdf/renderer';

    const Invoice = () => {

    const reciept_data = {
    // update reciept_data here
    }

    const styles = StyleSheet.create({
    // update Invoice styles here 
    }}

    const InvoiceTitle = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <Image style={styles.logo} src={logo} />
                <Text style={styles.reportTitle}>Xpress Enterprises</Text>
            </View>
        </View>
    );

    const Address = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View>
                    <Text style={styles.invoice}>Invoice </Text>
                    <Text style={styles.invoiceNumber}>Invoice number: {reciept_data.invoice_no} </Text>
                </View>
                <View>
                    <Text style={styles.addressTitle}>7, Ademola Odede, </Text>
                    <Text style={styles.addressTitle}>Ikeja,</Text>
                    <Text style={styles.addressTitle}>Lagos, Nigeria.</Text>
                </View>
            </View>
        </View>
    );
    const UserAddress = () => (
        <View style={styles.titleContainer}>
            <View style={styles.spaceBetween}>
                <View style={{maxWidth : 200}}>
                    <Text style={styles.addressTitle}>Bill to </Text>
                    <Text style={styles.address}>
                        {reciept_data.address}
                    </Text>
                </View>
                <Text style={styles.addressTitle}>{reciept_data.date}</Text>
            </View>
        </View>
    );
    const TableHead = () => (
        <View style={{ width:'100%', flexDirection :'row', marginTop:10}}>
            <View style={[styles.theader, styles.theader2]}>
                <Text >Items</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Price</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Qty</Text>   
            </View>
            <View style={styles.theader}>
                <Text>Amount</Text>   
            </View>
        </View>
    );
    const TableBody = () => (
        reciept_data.items.map((receipt)=>(
         <Fragment key={receipt.id}>
             <View style={{ width:'100%', flexDirection :'row'}}>
                 <View style={[styles.tbody, styles.tbody2]}>
                     <Text >{receipt.desc}</Text>   
                 </View>
                 <View style={styles.tbody}>
                     <Text>{receipt.price} </Text>   
                 </View>
                 <View style={styles.tbody}>
                     <Text>{receipt.qty}</Text>   
                 </View>
                 <View style={styles.tbody}>
                     <Text>{(receipt.price * receipt.qty).toFixed(2)}</Text>   
                 </View>
             </View>
         </Fragment>
        ))
     );
     const TableTotal = () => (
        <View style={{ width:'100%', flexDirection :'row'}}>
            <View style={styles.total}>
                <Text></Text>   
            </View>
            <View style={styles.total}>
                <Text> </Text>   
            </View>
            <View style={styles.tbody}>
                <Text>Total</Text>   
            </View>
            <View style={styles.tbody}>
                <Text>
                    {reciept_data.items.reduce((sum, item)=> sum + (item.price * item.qty), 0)}
                </Text>  
            </View>
        </View>
    );
      return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <InvoiceTitle  />
                    <Address/>
                    <UserAddress/>
                    <TableHead/>
                    <TableBody/>
                    <TableTotal/>
                </Page>
            </Document>
      )
    }
    export default Invoice