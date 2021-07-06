/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { generateUrl } from '@nextcloud/router'
import Router from 'vue-router'
import Vue from 'vue'

const Timeline = () => import('../views/Timeline')

Vue.use(Router)

export default new Router({
	mode: 'history',
	// if index.php is in the url AND we got this far, then it's working:
	// let's keep using index.php in the url
	base: generateUrl('/apps/activity'),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=self',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=by',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=files_favorites',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=files',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=files_sharing',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=calendar',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=calendar_todo',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=comments',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		{
			path: '?filter=contacts',
			component: Timeline,
			name: 'timeline',
			props: route => ({
			}),
		},
		// 	path: '/',
		// 	component: Timeline,
		// 	name: 'timeline',
		// 	props: route => ({
		// 		rootTitle: t('photos', 'Your photos'),
		// 	}),

		// {
		// {
		// 	path: '/albums/:path*',
		// 	component: Albums,
		// 	name: 'albums',
		// 	props: route => ({
		// 		path: parsePathParams(route.params.path),
		// 		// if path is empty
		// 		isRoot: !route.params.path,
		// 		rootTitle: t('photos', 'Your folders'),
		// 	}),
		// },
		// {
		// 	path: '/shared/:path*',
		// 	component: Albums,
		// 	name: 'shared',
		// 	props: route => ({
		// 		path: parsePathParams(route.params.path),
		// 		// if path is empty
		// 		isRoot: !route.params.path,
		// 		rootTitle: t('photos', 'Shared with you'),
		// 		showShared: true,
		// 	}),
		// },
		// {
		// 	path: '/videos',
		// 	component: Timeline,
		// 	name: 'videos',
		// 	props: route => ({
		// 		rootTitle: t('photos', 'Your videos'),
		// 		mimesType: videoMimes,
		// 	}),
		// },
		// {
		// 	path: '/favorites',
		// 	component: Timeline,
		// 	name: 'favorites',
		// 	props: route => ({
		// 		rootTitle: t('photos', 'Favorites'),
		// 		onlyFavorites: true,
		// 	}),
		// },
		// {
		// 	path: '/tags/:path*',
		// 	component: Tags,
		// 	name: 'tags',
		// 	redirect: !areTagsInstalled ? { name: 'timeline' } : null,
		// 	props: route => ({
		// 		path: `${route.params.path ? route.params.path : ''}`,
		// 		// if path is empty
		// 		isRoot: !route.params.path,
		// 		rootTitle: t('photos', 'Tagged photos'),
		// 	}),
		// },
		// {
		// 	path: '/maps',
		// 	name: 'maps',
		// 	// router-link doesn't support external url, let's force the redirect
		// 	beforeEnter() {
		// 		window.open(mapsPath, '_blank')
		// 	},
		// },
	],
})
