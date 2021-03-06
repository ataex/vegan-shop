import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
	selector: 'app-store-modal',
	templateUrl: './store-modal.component.html',
	styleUrls: [ './store-modal.component.css' ]
})
export class StoreModalComponent implements OnInit {
	amount: number;
	closeResult: string;
	@Input() product: Product;

	constructor(private modalService: NgbModal, private cartService: CartService) {}

	ngOnInit(): void {}

	open(content) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			}
		);
		console.log('PRODUCT OPEN = ', this.product);
	}

	add(product: Product) {
		this.cartService
			.addProductToCart({
				productID: product._id,
				amount: this.amount,
				price: this.amount,
				cartID: localStorage.getItem('cartID')
			})
			.subscribe((res) => console.log(res));

		this.modalService.dismissAll();
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
