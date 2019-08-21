/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import classNames from 'classnames';
import React from 'react';
import {ClayButtonWithIcon} from '@clayui/button';

interface IProps {
	className?: string;
	disabled?: boolean;
	onCloseButtonClick: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	onlySearch?: boolean;
	onValueChange: (val: string) => void;
	spritemap?: string;
	value: string;
}

const SearchInput: React.FunctionComponent<IProps> = ({
	className,
	disabled,
	onCloseButtonClick,
	onValueChange,
	onlySearch,
	spritemap,
	value,
}) => (
	<div className={classNames('input-group', className)}>
		<div className="input-group-item">
			<input
				aria-label="Search"
				className="form-control input-group-inset input-group-inset-after"
				disabled={disabled}
				onChange={event => onValueChange(event.target.value)}
				type="text"
				value={value}
			/>
			<span className="input-group-inset-item input-group-inset-item-after">
				{!onlySearch && (
					<ClayButtonWithIcon
						className="navbar-breakpoint-d-none"
						displayType="unstyled"
						onClick={onCloseButtonClick}
						spritemap={spritemap}
						symbol="times"
					/>
				)}

				<ClayButtonWithIcon
					disabled={disabled}
					displayType="unstyled"
					spritemap={spritemap}
					symbol="search"
					type="submit"
				/>
			</span>
		</div>
	</div>
);

export default SearchInput;
